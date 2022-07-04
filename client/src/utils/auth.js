import decode from 'jwt-decode';

class AuthService {
    // get the data saved within the token
    getProfile(){
        return decode(this.getToken())
    }

    // check if the user is still loggged in, if the token is saved & valid, and if it's not undefined or expired using the methods below
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // check if the token has expired
    isTokenExpired(token){
        try{
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000){
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    // get the token from local storage
    getToken(){
        return localStorage.getItem('id_token');
    }

    // save the token to local storage
    login(idToken){
        localStorage.setItem('id_token', idToken);

        window.location.assign('/dashboard');
    }

    // clear the token from local storage and for logout with reload
    logout(){
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();