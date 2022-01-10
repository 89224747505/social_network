import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="wrapper">
            <div className="App">
                <Header/>
                <NavBar/>
                {/*<Profile/>*/}
                <Dialogs />
            </div>
        </div>
    );
}

export default App;
