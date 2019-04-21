import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Todo_Dao from '../../services/todo';



export default class ComponentTest extends Component {
  

  constructor(props){
    super(props);
    this.state={
      text:'null',
    };
  }

  _test(){
    let todoDao = new Todo_Dao();
    todoDao.addTodo('everyday','运动','null');
  }

  _setText(){
    let todoDao = new Todo_Dao();
    let array;
    todoDao.finishTodo('b979588a-8d6c-49ba-86f6-2bba5768fc56','done');
  }

  render() {
    let todoDao = new Todo_Dao();
    return (
      <View style={{ flex: 1 }}>
        <Button title='create file' onPress={()=>{this._test();}}/>
        <Button title='show text' onPress={()=>{this._setText();}}/>
        <Button title='delete' onPress={()=>{todoDao.deleteStorage();}}/>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}