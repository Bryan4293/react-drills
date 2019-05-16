import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      text: "",
      list: []
    }
    this.handleAddList = this.handleAddList.bind(this)
    this.handleInputText= this.handleInputText.bind(this)
  }
    handleInputText(e){
      this.setState({text: e.target.value})
    }
    handleAddList(){
      // console.log('working')
      this.setState({
        text: '',
        list: [...this.state.list, this.state.text]
      })
    }
  render() {
    

    return (
      <div className="App">
        <Todo handleAddList= {this.handleAddList}
              handleInputText={this.handleInputText}
              list= {this.state.list}
        />
        
      </div>
    );
  }
}

export default App;
