import { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ErrorComponent from "./ErrorComponent";
import FooterComponet from "./FooterComponet";
import HeaderComponet from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponet from "./LogoutComponet";
import WelcomeComponent from "./WelcomeComponent";
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const TodoComponentWithParams = withNavigation(withParams(TodoComponent));
        const HeaderComponentWithNavigation = withNavigation(HeaderComponet);
        const LisTodoComponentWithNavigation = withNavigation(ListTodoComponent);
        
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                        } />
                        <Route path="*" element={<ErrorComponent/>} />
                        <Route path="/logout" element={<LogoutComponet />} />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <LisTodoComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/todos/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponentWithParams/>
                            </AuthenticatedRoute>
                        }/>

                    </Routes>
                    <FooterComponet />
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if(props.showLgnFaildMsg) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMsg(props) {
//     if(props.hasLoginSuccess) {
//         return <div>Login Successful</div>
//     }

//     return null
// }

export default TodoApp