import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'buy bread', key: '2' },
    { text: 'go visiting', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key != key))
  }

  const addTodoHandler = text => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('Oops!', 'Todos must have more than 3 characters', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log("dismissed")}}>
      <View style={styles.container}>
        <Header/> 
        <View style={styles.content}>
          <AddTodo addTodoHandler={addTodoHandler} />
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
