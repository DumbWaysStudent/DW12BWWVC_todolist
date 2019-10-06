import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';


export default class Todo extends Component {

    constructor() {
    super();
    
    this.state = {
        add:'Add',
        text:'New Todo',
        arrayHolder:[],
        inputHolder:null
    }
    
    this.todo = [
        {id:1, items:'coding'},
        {id:2, items:'coding'},
        {id:3, items:'coding'}
    ]
    }

    handleJoin = () => {
        this.todo.push({items: this.state.inputHolder})
        this.setState({ arrayHolder: [...this.todo] })
        this.textInputRef.clear();
    }

    render() {
    // const todo = ['work', 'swim', 'study', 'sleep', 'run']
      return (
        <View style={style.container}>
            <View style={style.todoInput}>
                <TextInput 
                autoCorrect={false} 
                ref={ref => this.textInputRef = ref}
                placeholder={this.state.text} 
                style={style.inputStyle} onChangeText={data => this.setState({inputHolder: data})} />

                <Button title={this.state.add} style={style.addButton} onPress={this.handleJoin} />
            </View>
            <View>
            <FlatList
                data={this.todo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <View   style={style.list}>
                <Text style={style.textList}> {item.items} </Text>
                {/* <Button title="X" onPress={(id) => this.remove_Selected_Item(id)} /> */}
           
                </View>
            }
            />
            </View>
        </View>
      );
    }
  }
  
const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#d3d6db',
        padding:4
    },

    todoInput: {
        
    },

    inputStyle: {
        marginHorizontal:4,
        backgroundColor:'white',
        borderRadius:5
        
    },

    addButton: {

    },

    todoContent:{

    },

    list: {
        backgroundColor:'white',
        borderRadius:3,
        margin:6,
        padding:8
    },

    textList: {
        fontSize: 16
    }
})