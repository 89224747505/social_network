import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import store from "./redux/store";


function App(props) {
    return (
        <div className="wrapper">
            <div className="App">
                <Header/>
                <NavBar/>
                <div className="app__content">
                    <Routes>
                        <Route path="/profile*" element={<Profile store={props.store} dispatch={props.dispatch}/>}/>
                        <Route path="/messages*" element={<Dialogs store={props.store} dispatch={props.dispatch}/>}/>
                        <Route path="/news*" element={<News/>}/>
                        <Route path="/music*" element={<Music/>}/>
                        <Route path="/settings*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
