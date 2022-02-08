import axios from "axios";
const bURL = "http://localhost:5000/api/";

const instance = axios.create({
    baseURL: bURL,
    withCredentials:true,
    headers: {
        "API-KEY": "e3aae285-0b54-4a17-86c5-bdda90bd9e4c"
    }
});


export const UserAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                debugger
                response.data.baseURL = bURL;
                return response.data});
    },

    getUserProfile (userID = 1) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                console.log(response);
                return response.data});
    },

    setUserUnFollow (userID = 2) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                return response.data});
    },

    setUserFollow (userID = 2) {
        return instance.post(`follow/${userID}`,null)
            .then(response => {
                return response.data});
    }
}





