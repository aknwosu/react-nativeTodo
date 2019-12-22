import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ addTodoHandler}) {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }
  const addTodo = () => {
    addTodoHandler(text);
    setText('');
  }
  
  return(
    <View>
      <TextInput
        value={text}
        style = {styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={addTodo}
        title='Add'
        color='coral'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})