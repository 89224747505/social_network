import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <div className="wrapper">
            <div className="App">
                <Header/>
                <NavBar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
