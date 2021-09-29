import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Create your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="your_email@google.com"
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Create your password..."
        />
        <button className="registerBtn">Login</button>
        <button className="registerLoginBtn">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Register;
