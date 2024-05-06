import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in username and password.");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          username,
          password,
        }
      );

      dispatch({
        type: "LOGIN",
        payload: data,
      });

      // Places user in local storage.
      window.localStorage.setItem("user", JSON.stringify(data));
      console.log("User logged in.");

      // Redirects user to Home when logged in.
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ReusableButton type="submit">Logga in</ReusableButton>
      </form>
    </div>
  );
};

/* <>
<h1>Examples of reusable button</h1>
<ReusableButton>Logga in</ReusableButton>
<ReusableButton>Registrera</ReusableButton>
<ReusableButton>Skapa annons</ReusableButton>
</> */

export default Login;
