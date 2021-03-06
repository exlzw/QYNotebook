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
    todoDao.getTodo().then((ret)=>{
      array=ret;
      this.setState({text:array[0].content});
    });
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