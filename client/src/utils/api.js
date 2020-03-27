import axios from "axios";

export default {
    //Get All Car Info
    getCarInfo: function(search){
        return axios.get("/API/carinfo/" + search)
    },
    signUp: function(userData){
        return axios.post("/register", userData)
    },
    signIn: function(userData){
        return axios.post("/login", userData)
    },
    getUser: function(){
        return axios.get("/user")
    },
    signOut: function(){
        return axios.post("/logout")
    }
}