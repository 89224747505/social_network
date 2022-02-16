import React from 'react';
import classes from "./Login.module.css";
import MyButton from "../common/MyButton/MyButton";
import {Form, Field} from "react-final-form";
import {validation} from "../../Utils/validation";
import MyInput from "../common/MyInput/MyInput";
import {Navigate} from "react-router-dom";

const Login = (props) => {

    if (props.isAuth) return <Navigate to={"/profile"} />

    return (
        <div className={classes.container}>
            <Form
                onSubmit={props.getUserDataAuth}
                validate={validation}
                render={({handleSubmit, submitting, pristine}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="login"
                                component={MyInput}
                                type="text"
                                placeholder="Введите логин"
                            />
                        </div>
                        <div>
                            <Field
                                name="email"
                                component={MyInput}
                                type="text"
                                placeholder="Введите email"
                            />
                        </div>
                        <div>
                            <Field
                                name="password"
                                component={MyInput}
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </div>
                        <MyButton type="submit" disabled={submitting || pristine}
                                  style={{width: "200px"}}>Авторизоваться</MyButton>
                        <div>{props.authMessage}</div>
                    </form>
                )}
            />
        </div>
    );
};

export default Login;