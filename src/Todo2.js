import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';

export default class Todo extends Component {

    constructor() {
    super();
    
    this.state = {
        add:'Add',
        text:'New Todo',
        arrayHolder:[],
        inputHolder:null,
        
    }
    
    this.todo = [
        {id:1, items:'Eat'},
        {id:2, items:'Pray'},
        {id:3, items:'Coding'},
        {id:4, items:'Shopping'}
    ]
    }

    handleJoin = () => {
        this.todo.push({items: this.state.inputHolder})
        this.setState({ arrayHolder: [...this.todo] })
        this.textInputRef.clear();
    }

    handleRemove (id) {
        this.todo.splice(id, 1);
        this.setState({arrayHolder: [...this.todo] });
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
                <View style={style.list}>
                <Text style={style.textList}> {item.items} </Text>
                <Button title="X" styles={style.btndelete} onPress={(id) => this.handleRemove(id)} />
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
        flexDirection: 'row',
        margin:4,
        justifyContent:'center'
    },

    inputStyle: {
        width: "90%",
        marginHorizontal:4,
        backgroundColor:'white',
        borderRadius:5
        
    },

    addButton: {
        width: "10%"
    },

    todoContent:{

    },

    list: {
        flexDirection: 'row',
        backgroundColor:'white',
        borderRadius:8,
        margin:6,
        padding:8,
        justifyContent:'space-between',
    },

    textList: {
        fontSize: 16
    },

    btndelete: {
        width:'20%',
        color:'red'
    }
})