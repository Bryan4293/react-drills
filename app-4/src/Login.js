import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin =this.handleLogin.bind(this)
    }
    handleUsernameChange(user){
        this.setState({username: user})
    }
    handlePasswordChange(word){
        this.setState({password: word})
    }
    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render(){
        return (
            <div>
                <input onChange={e =>this.handleUsernameChange(e.target.value)} />
                <input onChange={e => this.handlePasswordChange(e.target.value)} />
                <button onClick={e => this.handleLogin(e.target.value)}>Login</button>
            </div>
        );
    }
}
export default Login;