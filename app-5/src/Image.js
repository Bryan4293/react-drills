import React, {Component} from 'react'
import logo from "./logo.svg";
import "./App.css";
class Image extends Component{
    render(){
        return(
            <img className="App-logo" src={logo} />
        )
    }
}
export default Image