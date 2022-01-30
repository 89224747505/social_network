import React, {useEffect} from 'react';
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profileReducer'
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    const params = useParams();

    let userID = params['*'];
    if (!userID) userID=2;
    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
            .then(response => {props.setUserProfile({...response.data, currentUserProfile:userID});})
    },[userID]);

    return (
        <div>
            <Profile {...props}/>
        </div>
    );
};

let mapStateToProps = (state) => (
    {
    profile: state.profilePage.profile,
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);





