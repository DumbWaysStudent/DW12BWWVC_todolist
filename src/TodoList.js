import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import {Icon, ListItem, CheckBox} from 'native-base';


export default class TodoList extends Component {

    constructor() {
        super();
        
        this.state = {
            add:'Add',
            text:'New Todo',
            arrayHolder:[],
            inputData:null,
            todo: [
                {id:1, items:'Eat', status:'false'},
                {id:2, items:'Pray', status:'false'},
                {id:3, items:'Coding', status:'false'},
                {id:4, items:'Shopping', status:'false'}
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
        const data = this.state.todo
        const dataId = data.length + 1
        const inputData = {
            id : dataId,
            items: this.state.inputData,
            status: 'false'
        };
        data.push(inputData)
        this.setState({data : inputData, inputData : ''})
        // this.setState({inputData : ''})
        this.empty.clear()
        console.log(data)
    }

    handleRemove = (id) => {
        const data = this.state.todo
        const newData = data.filter(dataref => dataref.id !== id)
        console.log(newData)
        this.setState({
            todo : newData
        })
    }

    checkItem = (id) => {
        const data = this.state.todo
        const newData = data.map(item => {
            if (id === item.id) {
                item.status = !item.status
            } return item;
        })

        this.setState({
            todo : newData
        })
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
                    <ListItem > 
                    <CheckBox 
                        checked = {item.status} 
                        onPress = {()=> this.checkItem(item.id)}
                        color = "green"
                    />
                    </ListItem>
                    <Text style={style.textList}> {item.items} </Text>
                    <TouchableOpacity style={style.btndelete} onPress={() => this.handleRemove(item.id)}>
                        <Icon name="trash"/>
                    </TouchableOpacity>
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
        padding:9,
        flexDirection: 'row',
        justifyContent:'space-between'

    },

    textList: {
        fontSize: 16
    },

    btndelete: {
        backgroundColor : 'salmon',
        borderRadius : 10,
        alignItems : 'center',
        padding : 8,
        height : 40
    }
})