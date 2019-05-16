import React, {Component} from 'react'

class Todo extends Component {
    render(){
        // console.log(this.props)
        let makeTaskList= this.props.list.map((value, index) =>{
            return <div key={index}>{value}</div>
          })
        // console.log(this.props)
        return(
            <div>
                <h1>My to-do list: </h1>
                <div>
                   <input  onChange={this.props.handleInputText}/>
                   <button onClick={this.props.handleAddList}>Add task</button>
                   <p>{makeTaskList}</p>
                </div>
            </div>
        )
    }
}
export default Todo