import axios from "axios"

class TodoDatService {

    retriveAllTodosDataSrvce(name) {
        
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodoDataSrvce(name,id) {
        
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    getTodoDataSrvce(name,id) {
        
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodoDataSrvce(name,id,todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`,todo);
    }

    createTodoDataSrvce(name,todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos/`,todo);
    }
}

export default new TodoDatService()