
class AuthenticationService {

    registerLoginUser(userName, pwd) {
        sessionStorage.setItem("authenticated",userName);
    }

    logOut() {
        sessionStorage.removeItem("authenticated");
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("authenticated");
        console.log('Username:: '+ user);
        if(user===null) return false;
        return true;
    }

    getLoggedInUserName() {
        let userName = sessionStorage.getItem("authenticated");
        if(userName === null) return "";
        return userName;
    }


}

export default new AuthenticationService()