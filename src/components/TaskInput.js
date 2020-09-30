import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const taskListInputHandler = text => {
    setTask(text);
  };

  return (
    <View style={styles.taskContainer}>
      <TextInput
        placeholder='Input task'
        style={styles.input}
        onChangeText={taskListInputHandler}
        value={task}
      />
      <Button title='ADD' style={styles.button} onPress={() => addTask(task, setTask)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 20,
    width: '80%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '20%',
  },
});

export default TaskInput;
