import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ setRegister, register }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/login", credentials, {
        withCredentials: true
      });
      setCredentials({ username: "", password: "" });
      navigate("/page1");
      console.info("Successfully logged in");
    } catch (err) {
      alert(`Log in failed ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Login</h1>
      <form action="submit" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <button
          id="register"
          onClick={() => setRegister(!register)}
          type="button"
        >
          Register
        </button>
      </p>
    </>
  );
}
