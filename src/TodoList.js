import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class TodoList extends Component {

  constructor() {
    super();

    this.state =  {
        todo : [
          {id:1, items:'Eat'},
          {id:2, items:'Pray'},
          {id:3, items:'Coding'},
          {id:4, items:'Shopping'}
        ]
    }
  }

    render() {
      return (
        <View>
            <FlatList
                data={this.state.todo}
                renderItem={({ item }) => 
                <View   style={style.border}>
                <Text style={style.textList}> {item.items} </Text>
           
                </View> 
                }
            />
        </View>
      );
    }
  }
  
const style = StyleSheet.create({
border: {
    fontSize:22,
    borderWidth:1,
    borderRadius:3,
    padding:10,
    margin:6,
    padding:3
}, 



})