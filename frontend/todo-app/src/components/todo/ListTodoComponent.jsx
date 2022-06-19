import { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"


class ListTodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            todos: [
                // { id: 1, description: 'learn to dance', isDone: false, targetDate: new Date() },
                // { id: 2, description: 'learn react', isDone: false, targetDate: new Date() },
                // { id: 3, description: 'learn to swim', isDone: true, targetDate: new Date() }
            ]
        }
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
        TodoDataService.retriveTodoDataSrvce(AuthenticationService.getLoggedInUserName())
        .then(
            response => {
                // console.log(response.data);
                this.setState({todos: response.data})
            }
        )
    }

    render() {
        return (
            <div className="container">
                <h1>List of tods</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone}</td>
                                    <td>{todo.targetDate}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodoComponent