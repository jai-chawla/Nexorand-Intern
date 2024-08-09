
import './App.css';
import LoggedIn from './components/Auth/LoggedIn';
import Login from './components/Auth/Login';
import SignedIn from './components/Auth/SignedIn';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loggedIn" element={<LoggedIn />} />
          <Route path="/signedIn" element={<SignedIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
