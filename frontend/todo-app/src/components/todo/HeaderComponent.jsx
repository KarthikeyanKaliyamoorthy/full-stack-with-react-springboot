import { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponet extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/karthik">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logOut}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponet