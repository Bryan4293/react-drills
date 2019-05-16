import React, {Component} from 'react'

class Todo extends Component {
    render (){
        return(
            <p>{this.props.taskList}</p>
        )
    }
}
export default Todo