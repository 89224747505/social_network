import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {userLogOutThunk} from "../../redux/authReducer.ts";

class HeaderContainer extends Component {

    userLogOut = () => {
        this.props.userLogOutThunk(this.props.jwt);
    }

    render() {
        return (
            <Header {...this.props} userLogOut={this.userLogOut}/>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    jwt: state.auth.jwt,
    idAuth: state.auth.idAuth,
});


export default connect(mapStateToProps, {userLogOutThunk})(HeaderContainer);