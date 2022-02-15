import axios from "axios";
const bURL = "http://23.111.123.214:4000/api/";


export const UserAPI = {
    async getUsers (currentPage = 1, pageSize = 10, jwt) {
        return axios.create({baseURL: bURL,withCredentials:true, headers:{Authorization:"Bearer "+jwt}})
                    .get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response => {
                        response.data.baseURL = bURL;
                        return response.data});
    },

    async getUserProfile (userID= 1, jwt) {
        return axios.create({baseURL: bURL,withCredentials:true, headers:{Authorization:"Bearer "+jwt}})
            .get(`profile/${userID}`)
            .then(response => {
                response.data.baseURL = bURL;
                return response.data});
    },

    async setUserUnFollow (userID = 1, jwt) {
        return axios.create({baseURL: bURL,withCredentials:true, headers:{Authorization:"Bearer "+jwt}})
                    .delete(`follow/${userID}`)
                    .then(response => {
                        return response.data});
    },

    async setUserFollow (userID = 1, jwt) {
        return axios.create({baseURL: bURL,withCredentials:true, headers:{Authorization:"Bearer "+jwt}})
                    .post(`follow/${userID}`,null)
                    .then(response => {
                        return response.data});
    },

    async getLoginUser (login="",email="",password="") {
        return axios.create({baseURL: bURL,withCredentials:true}).post("auth/login",{login, email, password})
            .then(response =>{
                return response.data})
    },

    async setUserLogOut (jwt) {
        return axios.create({baseURL: bURL,withCredentials:true, headers:{Authorization:"Bearer "+jwt}})
            .delete("auth/login")
            .then(response =>{
                return response.data})
    },

    async setUserStatus (userID = 1, status="") {
        return axios.create({baseURL: bURL,withCredentials:true})
            .put(`profile/status`,{id: userID, status})
            .then(response => {
                return response.data});
    }
}





