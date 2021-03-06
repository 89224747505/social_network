import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import React, {useEffect} from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App(props) {
    let a;
    useEffect(()=>{
        a = localStorage.getItem("jwt");
    },[]);
    console.log("Var - ",a);
    return (
        <div className="wrapper">
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <div className="app__content">
                    <Routes>
                        <Route path="/" element={<LoginContainer/>}/>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/messages" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
