import React, {Component} from 'react'
import Todo from './Todo'
class List extends Component {
    render(){
        let makeTaskList= this.props.list.map((val, index) =>{
            return <div key={index}> {val} </div>
          })
          return <Todo taskList={makeTaskList} />
    }
}
export default List