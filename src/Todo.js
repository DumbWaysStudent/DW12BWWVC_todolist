import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Todo extends Component {
    render() {
        const todo = ['work', 'swim', 'study', 'sleep', 'run']
      return (
        <View>
            {todo.map((todo, index) => {
                return (
                    <Text key={index} style={style.border}> {todo} </Text>
                )
            })}
        </View>
      );
    }
  }
  
const style = StyleSheet.create({
border: {
    fontSize:22,
    borderWidth:1,
    borderRadius:3,
    margin:6,
    padding:3
}
})