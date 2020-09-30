import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskInput = () => {
  const [task, setTask] = useState('');

  const taskListInputHandler = text => {
    setTask(text);
  };

  return (
    <TextInput
      placeholder='Input task'
      style={styles.input}
      onChangeText={taskListInputHandler}
      value={task}
    />
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 20,
    width: '80%',
  },
});
