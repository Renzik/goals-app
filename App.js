import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TaskItem from './src/components/TaskItem';
import TaskInput from './src/components/TaskInput';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (taskValue, resetTaskInput) => {
    setTaskList(taskList => [...taskList, { id: Math.random().toString(), value: taskValue }]);
    resetTaskInput('');
  };

  const handleDelete = id => {
    setTaskList(taskList => {
      return taskList.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <TaskInput addTask={addTaskHandler} />
      <FlatList
        data={taskList}
        // keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <TaskItem id={item.id} onDelete={handleDelete} title={item} />}
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
});
