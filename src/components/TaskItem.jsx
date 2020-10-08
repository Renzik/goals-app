import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TaskItem = ({ title: { id, value }, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
      <View style={styles.listView}>
        <Text>{value}</Text>
        {/* <Text>{itemData.item.value}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#ccc',
    padding: '4%',
    marginTop: 20,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
  },
});
