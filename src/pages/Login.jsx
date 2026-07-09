import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please Sign Up first.");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      alert("Login Successful 🎉");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }

  };

  return (

    <div className="login-container">

      <div className="login-box">

        <h2>Welcome Back 👋</h2>

        <p>Login to continue to LegalEase Assist</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-options">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">

            Login

          </button>

        </form>

        <p className="signup-text">

          Don't have an account?

          <Link to="/signup"> Sign Up</Link>

        </p>

      </div>

    </div>

  );

}

export default Login;