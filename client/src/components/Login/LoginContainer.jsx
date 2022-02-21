import React, {Component} from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {getUserLoginThunk} from "../../redux/authReducer.ts";


class LoginContainer extends Component {

    getUserDataAuth = (values) => {
        this.props.getUserLoginThunk(values.login, values.email, values.password);
    }

    render() {
        return (
            <Login {...this.props} getUserDataAuth={this.getUserDataAuth}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    jwt: state.auth.jwt,
    idAuth: state.auth.idAuth,
    authMessage: state.auth.authMessage,
    errorAuth: state.auth.errorAuth,
});


export default connect(mapStateToProps, {getUserLoginThunk})(LoginContainer);
