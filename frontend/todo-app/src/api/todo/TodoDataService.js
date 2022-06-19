import axios from "axios"

class TodoDatService {

    retriveTodoDataSrvce(name) {
        
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }
}

export default new TodoDatService()