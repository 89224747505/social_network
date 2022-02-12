import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    jwt: state.auth.jwt,
    idAuth: state.auth.idAuth,
});


export default connect(mapStateToProps, {})(HeaderContainer);