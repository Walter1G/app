import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = ({setAuth, setUser}) => {

  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true)
    if (username === "Admin1" && password === "Altumfall") {
      setLoading(false);
      // alert("login successful");
      setUser("Super Admin")
      setAuth(true);
      navigate("/dashboard/tasks");
    } else {
      setError("Invalid username or password");
      setLoading(false)
    }
  }
  return (
    <div className="login-form">
      <div className="form-container">
        <form className="form card" onSubmit={handleLogin}>
          <div className="form-content">
            <h2 className="title">Login</h2>
            {error && <div className="error">{error}</div>}
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-row">
              <button type="submit" className={`btn btn-primary ${loading?"disabled":""}`} disabled={loading}  >
                {loading?"Loading ...":"Log In"}
              </button>
            </div>
            <p>
              Forgot Password? <Link to="/">Change password</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
