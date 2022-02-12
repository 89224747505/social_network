import React from 'react';
import classes from "./Login.module.css";
import MyButton from "../common/MyButton/MyButton";

const Login = (props) => {

    let getChangeLogin = (event) => props.updateLoginText(event.target.value);

    let getChangeEmail = (event) => props.updateEmailText(event.target.value);

    let getChangePassword = (event) => props.updatePasswordText(event.target.value);

    return (
        <div className={classes.container}>
            <div><input onChange={getChangeLogin} type="text" placeholder="Введите логин" value={props.login}/></div>
            <div><input onChange={getChangeEmail} type="text" placeholder="Введите e-mail" value={props.email}/></div>
            <div><input onChange={getChangePassword} type="password" placeholder="Введите пароль" value={props.password}/></div>
            <MyButton onClick={props.getUserDataAuth} style={{width:"200px"}}>Авторизоваться</MyButton>
            {props.errorAuth
                ? <div>Ошибка авторизации</div>
                : <div>Пользователь авторизован</div>}
        </div>
    );
};

export default Login;