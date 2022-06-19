import axios from "axios"

class HelloWorldService {
    retriveHelloWrldSrvce() {
        // console.log('Hello world service clicked')
        return axios.get("http://localhost:8080/hello");
    }

    retriveHelloWrldBeanSrvce() {
        // console.log('Hello world service clicked')
        return axios.get("http://localhost:8080/hello-bean");
    }

    retriveHelloWrldPathParamSrvce(name) {
        // console.log('Hello world service clicked')
        return axios.get(`http://localhost:8080/hello-bean/${name}`);
    }
    
}

export default new HelloWorldService()