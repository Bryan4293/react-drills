import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.handleAddTask= this.handleAddTask.bind(this)
  }
  handleAddTask(val){
    this.setState({
      list: [...this.state.list,val]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>To do List</h1>
        <NewTask add={this.handleAddTask}/>
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
