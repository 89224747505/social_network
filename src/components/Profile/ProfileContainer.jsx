import React, {Component} from 'react';
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from '../../redux/profileReducer'


class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            }
        )
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => (
    {
    profile: state.profilePage.profile,
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);