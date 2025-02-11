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
import Dashboard from "./pages/dashboard.jsx";
import { useState } from "react";
// import Admin from './pages/Admin'

function App() {
  const [auth, setAuth]=useState(false)
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
               {auth&& <div className="links">
                  <li>
                    <NavLink to="/dashboard/tasks">Task</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/inventory">Inventory</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/chat">Chat</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/users">Users</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/profile">Profile</NavLink>
                  </li>
                </div>}
                <div className="btns">
                  <Link to={auth?"/logout":"/login"}>
                    <img
                      src={profileImg}
                      alt="profile icon"
                      width="32px"
                      height="32px"
                    />
                   { auth?"Logout":"Login"}
                  </Link>
                </div>
              </ul>
            </nav>
          </header>
          <div className="content"> 
          <Routes>
            <Route path="/" element={<Home />} />


            {auth && <>
            
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/Tasks" element={<Tasks />} />
            <Route path="/dashboard/inventory" element={<Inventory />} />
            <Route path="/dashboard/chat" element={<Chat />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            </>}
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </div>
            
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
