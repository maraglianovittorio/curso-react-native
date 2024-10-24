import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';

export default function Main() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleAddTask = () => {
    if (task.length === 0) return;


    setTasks([...tasks, { key: Math.random().toString(), taskName: task, completed: false }]);
    setTask('');
    Keyboard.dismiss();
  };

  const handleCompleteTask = (taskKey) => {
    setTasks(
      tasks.map((item) =>
        item.key === taskKey ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteTask = (taskKey) => {
    setTasks(tasks.filter((item) => item.key !== taskKey));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={item.completed ? styles.taskCompleted : styles.task}>
              {item.taskName}
            </Text>

            <TouchableOpacity
              style={[
                styles.completeButton,
                { backgroundColor: item.completed ? '#d9534f' : '#5cb85c' },
              ]}
              onPress={() => handleCompleteTask(item.key)}
            >
              <Text style={styles.completeButtonText}>
                {item.completed ? 'Undo' : 'Complete'}
              </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => handleDeleteTask(item.key)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#5cb85c',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  task: {
    fontSize: 18,
    flex: 1,
  },
  taskCompleted: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
    flex: 1,
  },
  completeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteButton: {
    color: 'red',
    fontSize: 18,
  },
});
