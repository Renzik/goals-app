import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ value }) => {
  return (
    <View style={styles.listView}>
      <Text>{value}</Text>
      {/* <Text>{itemData.item.value}</Text> */}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#ccc',
    padding: '4%',
    marginTop: 20,
    width: '80%',
  },
});
