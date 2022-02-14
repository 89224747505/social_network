import React, {Component} from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {updateEmailText, updateLoginText, updatePasswordText, getUserLoginThunk} from "../../redux/authReducer";


class LoginContainer extends Component {

    getUserDataAuth = () => {
        this.props.getUserLoginThunk(this.props.login, this.props.email, this.props.password);
    }

    render() {
        return (
            <Login {...this.props} getUserDataAuth={this.getUserDataAuth}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    jwt: state.auth.jwt,
    idAuth: state.auth.idAuth,
    email: state.auth.email,
    password: state.auth.password,
    errorAuth: state.auth.errorAuth,
});


export default connect(mapStateToProps, {updateLoginText, updateEmailText, updatePasswordText, getUserLoginThunk})(LoginContainer);
