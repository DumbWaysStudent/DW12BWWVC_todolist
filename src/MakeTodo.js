import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';


export default class Todo extends Component {

    constructor() {
        super();
        
        this.state = {
            add:'Add',
            text:'New Todo',
            arrayHolder:[],
            inputData:null,
            todo: [
                {id:1, items:'Eat'},
                {id:2, items:'Pray'},
                {id:3, items:'Coding'},
                {id:4, items:'Shopping'}
            ]
        }
    }

    // itemList = ({title}) => {
    //     return (
    //         <View style={style.list}> 
    //             <Text style={style.textList}> {title} </Text>
    //         </View>
    //     )
    // }

    handleAdd = () => {
        // this.todo.push({items: this.state.inputHolder})
        // this.setState({ arrayHolder: [...this.todo] })
        // this.textInputRef.clear();
        const data = this.state.todo;
        const dataId = data.length + 1;
        const inputData = {
            id : dataId,
            items: this.state.inputData
        };
        data.push(inputData)
        this.setState({data : inputData})
        this.empty.clear()
        console.log(data)

    }

    render() {
      return (
        <View style={style.container}>
            <View style={style.todoInput}>
                <TextInput 
                ref={ref => this.empty = ref}
                placeholder={this.state.text} 
                style={style.inputStyle} onChangeText={data => this.setState({inputData: data})} />
                <Button title={this.state.add} style={style.addButton} onPress={this.handleAdd} />
            </View>
            <View>
            <FlatList
                data={this.state.todo}
                keyExtractor= { (item) => item.id }
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
        flexDirection:'row',
        justifyContent:'center',
        padding:5
    },

    inputStyle: {
        marginHorizontal:4,
        backgroundColor:'white',
        borderRadius:5,
        width:'85%'
        
    },
    
    list: {
        backgroundColor:'white',
        borderRadius:3,
        marginVertical:5,
        marginHorizontal:13,
        padding:9
    },

    textList: {
        fontSize: 16
    }
})