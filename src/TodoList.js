import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import {Icon, ListItem, CheckBox} from 'native-base';


export default class TodoList extends Component {

    constructor() {
        super();
        
        this.state = {
            // btnadd:`${this.state.btnValue ? "Edit" : "Add"}`,
            text:'New Todo',
            inputData:null,
            todo: [
                {id:1, items:'Eat', status:'false'},
                {id:2, items:'Pray', status:'false'},
                {id:3, items:'Coding', status:'false'},
                {id:4, items:'Shopping', status:'false'}
            ],
            updateId: '',
            btnValue : false
            
        }
    }

    handleAdd = () => {
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

    handleUpAdd = () => {
        if (!this.state.inputData) {
            return;
        }
        const data = this.state.todo
        if (this.state.btnValue === false) {
            const dataId = data.length + 1
            const inputData = {
                id : dataId,
                items: this.state.inputData,
                status: 'false'
            };
            data.push(inputData)
            this.setState({data : inputData, inputData : ''})
            this.empty.clear()
            console.log(data)
        } else {
            data.map( item => {
                if (this.state.updateId === item.id) {
                    item.items = this.state.inputData
                }
                return item;
            })
        
            this.setState({
                btnValue: false,
            })
        }
        this.empty.clear();
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

    changeToEdit = (id) => {
        const items = this.state.todo
        items.map( item => {
            if (id === item.id) {
                this.setState({
                    inputData : item.items,
                    btnValue : true,
                    updateId : id
                 })
            } return item;
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
                <Button title={this.state.btnValue ? "Edit" : "Add"} style={style.addButton} onPress={this.handleUpAdd} />
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
                        color = "white"
                    />
                    </ListItem>
                    <Text style={style.textList}> {item.items} </Text>

                    <View style={style.btnboth}>  
                    <TouchableOpacity style={style.btnupdate} >
                        <Icon type="FontAwesome" name="edit" onPress={() => this.changeToEdit(item.id)}  />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btndelete} onPress={() => this.handleRemove(item.id)}>
                        <Icon type="FontAwesome" name="trash"/>
                    </TouchableOpacity>
                    </View>
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
        backgroundColor:'#6e9eeb',
        borderRadius:3,
        marginVertical:5,
        marginHorizontal:13,
        padding:9,
        flexDirection: 'row',
        justifyContent:'space-between'

    },

    textList: {
        fontSize: 20,
        textTransform:'uppercase',
        fontWeight:'bold'
    },

    btnboth: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    btndelete: {
        backgroundColor : '#f25500',
        borderRadius : 10,
        alignItems : 'center',
        padding : 8,
        height : 40
    },

    btnupdate: {
        backgroundColor : '#42c217',
        borderRadius : 10,
        alignItems : 'center',
        padding : 8,
        height : 40
    }
})