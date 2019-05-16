import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
        this.state ={
            text: ''
        }
        this.handleInputText= this.handleInputText.bind(this)
        this.handleAddText= this.handleAddText.bind(this)
    }
    handleInputText(e){
        this.setState({text: e.target.value})
    }
    handleAddText(){
        this.props.add(this.state.text)
        this.setState({text: ''})
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <input onChange={this.handleInputText} />
                <button onClick={this.handleAddText}>Add Task</button>
            </div>
        )
    }
}
export default NewTask