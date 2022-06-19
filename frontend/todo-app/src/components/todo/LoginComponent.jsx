import { Component } from "react"
import AuthenticationService from "./AuthenticationService"

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "karthik",
            password: "",
            hasLoginSuccess: false,
            showLgnFaildMsg: false
        }

        // this.handleUsrNmeChnge = this.handleUsrNmeChnge.bind(this)
        // this.handlePwdChnge = this.handlePwdChnge.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event) {
        // console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleUsrNmeChnge(event) {

    //     console.log(event.target.value)
    //     this.setState({userName: event.target.value})
    // }

    // handlePwdChnge(event) {
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }

    handleLogin() {
        //console.log(this.state)
        if (this.state.userName === 'karthik' && this.state.password === 'dummy') {
            console.log("successful")
            AuthenticationService.registerLoginUser(this.state.userName, this.state.password);
            this.props.navigate(`/welcome/${this.state.userName}`)
            // this.setState({
            //     hasLoginSuccess: true,
            //     showLgnFaildMsg: false
            // })
        }
        else {
            console.log("Failed")
            this.setState({
                hasLoginSuccess: false,
                showLgnFaildMsg: true
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.showLgnFaildMsg && <div classNmae="alert alert-warning" role="alert">Invalid Credentials</div>}
                    {/*{this.state.hasLoginSuccess && <div>Login Successful</div>}*/}
                    {/*<ShowInvalidCredentials showLgnFaildMsg={this.state.showLgnFaildMsg}/>*/}
                    {/*<ShowLoginSuccessMsg hasLoginSuccess={this.state.hasLoginSuccess}/>*/}

                    UserName:<input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent