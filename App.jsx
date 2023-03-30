/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
// import type {PropsWithChildren} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(){
  const [todo,setTodo]=useState([
    {text:'Buy milk',key:'1'},
    {text:'Make notes',key:'2'},
    {text:'Bring laptop',key:'3'},
    {text:'Do the task!',key:'4'},
    
  ]);

  const pressHandler=(key)=>{
    setTodo((prevTodo)=>{
      return prevTodo.filter((item)=>item.key!=key);
    })
  }
  const submitHandler=(val)=>{
    setTodo((prevTodo)=>{
      return [...prevTodo,{text:val,key:Math.random().toString()}]
    })
  }
  return (
    <>
    <Header />
    <AddTodo submitHandler={submitHandler}/>

    <View style={styles.container}>
      <FlatList
      data={todo}
      renderItem={({item})=>(
        <Todo item={item} pressHandler={pressHandler}/>
        )}
        />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
 container:{
  flex:4,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center'
 },
 item:{
  marginTop:24,
  padding:30,
  marginHorizontal:12,
  backgroundColor:'pink',
  height:100,
  fontSize:24
 }
});

export default App;
