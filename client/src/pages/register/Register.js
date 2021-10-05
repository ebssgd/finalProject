import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      //console.log(response); //Gives a 500 error if no data is input
      if (response.data) {
        return window.location.replace("/login");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Create your username..."
          onChange={(el) => setUsername(el.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="your_email@google.com"
          onChange={(el) => setEmail(el.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Create your password..."
          onChange={(el) => setPassword(el.target.value)}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span className="red">That's no moon.</span>}
    </div>
  );
}

export default Register;
