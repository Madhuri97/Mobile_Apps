import React, {Component} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Button, View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import {CheckBox} from "react-native-elements";
import DatePicker from 'react-native-datepicker';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {list: []} 
  
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleAddTask(task) {
    console.log("add task clicked");
    this.state.list.push(task);
    this.setState({list: this.state.list})
  }

  handleDeleteTask(id) {
    console.log("delete task clicked");
    let newList = this.state.list.filter(taskDelete => {
        if(taskDelete.id !== id)
            return taskDelete;
    })
    this.setState({list: newList})
  }

  checkBox_Test(index) {
    console.log("checkbox checked")
    let newArr = this.state.list;
    newArr[index].checked = !newArr[index].checked;
    this.setState({list: newArr});
  }

  TaskList() {
    return this.state.list.map((t,index) => {
      return (
        <View>
          <ScrollView>
            <CheckBox title={t.name + "," + t.dueDate.getDate()+"-"+(t.dueDate.getMonth()+1)+"-"+t.dueDate.getFullYear()} 
            checked={t.checked} 
            onPress = {() => this.checkBox_Test(index)}
            />
            <Button 
            title="Delete" 
            color="#f194ff" 
            onPress={() => this.handleDeleteTask(t.id)}
            />
          </ScrollView>
        </View>
      )
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={{textAlign: 'center'}} >To Do List App</Text>
          <TaskNameForm onAddTask={this.handleAddTask}/>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}> Tasks List</Text>
          <ScrollView>{this.TaskList()}</ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export class TaskNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit(event) {
    const taskList = this.props.taskList;
    // create a task object
    event.preventDefault();
    const task = {id:Date.now(), name: this.state.TextInputValue, 
    dueDate: new Date(), date: this.state.date, checked: false};
    // add the task object to the task list
    this.props.onAddTask(task);
    this.setState({TextInputValue: '', date: ''})
  }
   
  handleChange(event) {
    // code to set the state of the component
    this.setState({TextInputValue: event});
  }

  render() {
    return (
      <View>
        <TextInput 
        style={{ height: 40, borderColor: 'black', borderWidth: 1 }} 
        placeholder={"Enter Task"} value = {this.state.TextInputValue} 
        onChangeText = {this.handleChange}
        />
        <DatePicker
          style={{width: 300}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2035"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <Button 
        title="Add Task" 
        color="#f194ff" 
        onPress = {this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    // justifyContent: 'center',
  },
});
