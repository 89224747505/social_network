import axios from "axios";
const bURL = "http://23.111.123.214:4000/api/";

const instance = axios.create({
    baseURL: bURL,
    withCredentials:true,
    headers: {
        JWT:""
    }
});


export const UserAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                response.data.baseURL = bURL;
                return response.data});
    },

    async getUserProfile (userID= 1) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                response.data.baseURL = bURL;
                return response.data});
    },

    async setUserUnFollow (userID = 2) {
        return console.log("ok unfollow")
        // instance.delete(`follow/${userID}`)
        //     .then(response => {
        //         return response.data});
    },

    async setUserFollow (userID = 2) {
        return console.log("ok follow")
        // instance.post(`follow/${userID}`,null)
        //     .then(response => {
        //         return response.data});
    },

    async getLoginUser (login="",email="",password="") {
        return axios.create({baseURL: bURL,withCredentials:true}).post("auth/login",{login, email, password})
            .then(response =>{
                return response.data})
    }
}





