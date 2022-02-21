import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile, setUserStatusThunk} from '../../redux/profileReducer.ts'
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "lodash/fp/compose";


const ProfileContainer = (props) => {

    const params = useParams();

    let userID = params['*'];

    if (!userID && props.isAuth) userID=props.authUserId;

    useEffect(()=>{
       props.getUserProfileThunk(userID, props.jwt);
    },[userID]);


    return (
        <div>
            <Profile {...props}/>
        </div>
    );
};


let mapStateToProps = (state) => (
    {
        jwt: state.auth.jwt,
        authUserId:state.auth.idAuth,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
        baseURL:state.usersPage.baseURL,
})


export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk, setUserStatusThunk}),
    withAuthRedirect
)(ProfileContainer);



