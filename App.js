import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TaskItem from './src/components/TaskItem';
import TaskInput from './src/components/TaskInput';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = () => {
    setTaskList(taskList => [...taskList, { key: Math.random().toString(), value: task }]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TaskInput />
        <Button title='ADD' style={styles.button} onPress={addTaskHandler} />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item: { value } }) => <TaskItem value={value} />}
        // FlatList should have a specific data concept, each item should be an object with {key:num, value/item: actual item}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 50,
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
