import { Component } from "react";

class TodoComponent extends Component {
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    render(){
        return(
            <div>
                UserName:<input type="text" name="userName" value="karthik"/>
                Password:<input type="password" name="password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoComponent