import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from '../../redux/profileReducer'
import {useParams} from "react-router-dom";

const ProfileContainer = (props) => {

    const params = useParams();
    let userID = params['*'];
    if (!userID && props.isAuth) userID=props.authUserId;
    useEffect(()=>{
       props.getUserProfileThunk(userID);
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
        authUserId:state.auth.idAuth,
        profile: state.profilePage.profile,
        baseURL:state.usersPage.baseURL,
})


export default connect(mapStateToProps, {setUserProfile, getUserProfileThunk})(ProfileContainer);





