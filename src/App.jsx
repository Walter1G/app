import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks.jsx";
import Users from "./pages/Users.jsx";
import profileImg from "./assets/profileImg.png";
// import Admin from './pages/Admin'

function App() {
  return (
    <>
      <div className="page">
        <BrowserRouter>
          <header className="header">
            <nav>
              <ul>
                <div className="logo">
                  <Link to="/home">Ikomol</Link>
                </div>
                <div className="links">
                  <li>
                    <NavLink to="/tasks">Task</NavLink>
                  </li>
                  <li>
                    <NavLink to="/inventory">Inventory</NavLink>
                  </li>
                  <li>
                    <NavLink to="/chat">Chat</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users">Users</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                </div>
                <div className="btns">
                  <Link>
                    <img
                      src={profileImg}
                      alt="profile icon"
                      width="32px"
                      height="32px"
                    />
                  </Link>
                </div>
              </ul>
            </nav>
          </header>
          <div className="content"> 
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users" element={<Users />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          </div>
            
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
