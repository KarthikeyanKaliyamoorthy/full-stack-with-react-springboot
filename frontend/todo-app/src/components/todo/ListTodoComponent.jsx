import moment from "moment"
import { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"


class ListTodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            todos: [],
            message:''
        }
        this.deleteClicked = this.deleteClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateClicked = this.updateClicked.bind(this);
        this.addClicked = this.addClicked.bind(this)

    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
        TodoDataService.retriveAllTodosDataSrvce(AuthenticationService.getLoggedInUserName())
            .then(
                response => {
                    console.log(response.data);
                    this.setState({ todos: response.data })
                }
            )
    }

    deleteClicked(id) {
        const userName = AuthenticationService.getLoggedInUserName();
        console.log(id+" : " +userName)

        TodoDataService.deleteTodoDataSrvce(userName,id)
        .then(
            response => {
                this.setState( {
                    message: `Delete of todo ${id} is succesfull`
                })
                this.refreshTodos();
            }
        )

    }

    updateClicked(id) {
        console.log('update to do id: '+id)
        this.props.navigate(`/todos/${id}`)
    }

    addClicked() {
        this.props.navigate(`/todos/-1`)
    }

    render() {
        return (
            <div className="container">

                {this.state.message && <div className="alert alert-success">{this.state.message}</div> }
                <h1>List of tods</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('DD-MM-YYYY')}</td>
                                    <td><button className="btn btn-success" onClick={() => {this.updateClicked(todo.id)}}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => {this.deleteClicked(todo.id)}}>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <div className="container"><button className="btn btn-success" onClick={this.addClicked}>Add</button></div>
            </div>
        )
    }
}

export default ListTodoComponent