import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


function App(props) {
    // Объекты диалога. Его элементы, т.е. ID и Имя пользователя
    let dialogPage = props.state["dialogPage"];  // Достаем dialogPage из объекта state и помещаем в объект dialogPage для более удобной манипуляции
    let messagePage = props.state["messagePage"];// Достаем messagePage из объекта state и помещаем в объект messagePage для более удобной манипуляции
    let profilePage = props.state["profilePage"];      // Достаем postPage из объекта state и помещаем в объект postPage для более удобной манипуляции
    let addPost = props.addPost;

    return (
        <div className="wrapper">
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <NavBar/>
                    <div className="app__content">
                        <Routes>
                            <Route path="/profile*" element={<Profile profilePage={profilePage} addPost={addPost} newPostTextChange={props.newPostTextChange}/>}/>
                            <Route path="/messages*" element={<Dialogs dialogPage={dialogPage} messagePage={messagePage}/>}/>
                            <Route path="/news*" element={<News/>}/>
                            <Route path="/music*" element={<Music/>}/>
                            <Route path="/settings*" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
