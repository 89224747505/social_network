import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profileReducer'
import {useParams} from "react-router-dom";
import {UserAPI} from "../../api/api";

const ProfileContainer = (props) => {

    const params = useParams();
    let userID = params['*'];
    if (!userID && props.isAuth) userID=props.authUserId;
    useEffect(()=>{
       UserAPI.getUserProfile(userID)
            .then(data => {props.setUserProfile({...data, currentUserProfile:userID});})
    },[userID]);

    return (
        <div>
            <Profile {...props}/>
        </div>
    );
};

let mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        authUserId:state.auth.id,
        profile: state.profilePage.profile,
        baseURL:state.usersPage.baseURL,
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);





