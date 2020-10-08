import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

const TaskInput = ({ addTask, visible, toggleVisibility }) => {
  const [task, setTask] = useState('');

  const taskListInputHandler = text => {
    setTask(text);
  };

  const setTaskHandler = () => {
    addTask(task);
    setTask('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.taskContainer}>
        <TextInput
          placeholder='Input task'
          style={styles.input}
          onChangeText={taskListInputHandler}
          value={task}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={() => toggleVisibility(!visible)} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={setTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 20,
    width: '80%',
    marginBottom: 10,
  },
  taskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  button: {
    width: '41%',
  },
});

export default TaskInput;
