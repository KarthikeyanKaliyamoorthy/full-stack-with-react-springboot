import { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.getWlcmeMsg = this.getWlcmeMsg.bind(this);

        this.state = {
            wlcmeMsg: ""
        }

        this.getHelloBeanMsg = this.getHelloBeanMsg.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {

        return (
            <div className="container">
                <h1>Welcome! </h1>
                <div >Welcome {this.props.params.name}. Click here to go to <Link to="/todos">todos</Link></div>
                <div><button className="btn btn-success" onClick={this.getHelloBeanMsg}>Get Welcome Message</button></div>
                <div>{this.state.wlcmeMsg}</div>
            </div>
        )
    }

    getWlcmeMsg() {
        // console.log('welcome msg button clicked')
        HelloWorldService.retriveHelloWrldSrvce()
        .then(response => this.setState({wlcmeMsg: response.data}));
    }

    getHelloBeanMsg() {
        // console.log('welcome msg button clicked')
        // HelloWorldService.retriveHelloWrldBeanSrvce()
        // .then(response => {
        //     // console.log(response.data)
        //     this.setState({wlcmeMsg: response.data.msg})
        // });

        HelloWorldService.retriveHelloWrldPathParamSrvce(this.props.params.name)
        .then(response => {
            // console.log(response.data)
            this.setState({wlcmeMsg: response.data.msg})
        })
        .catch(error => this.handleError(error));
    }

    handleError(error) {
        //console.log(error.response)
        this.setState({
            wlcmeMsg: error.response.data.message
        })
    }
}

export default WelcomeComponent