import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";
import { render } from "react-dom";

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
        },
        { withCredentials: true }
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
        <h1>Välkommen!</h1>
        <div className="inputBox">
          <label></label>
          <input
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        

        <div className="inputBox">
          <label></label>
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ReusableButton type="submit">Logga in</ReusableButton>

        <div className="registerLink">
          <img className="iconMan" src="images/ProfileIcon.png" alt="Icon" />
          <p>Ny användare?</p>
          <button
            className="registerButton"
            onClick={() => navigate("/register")}
          >
            Registrera
          </button>
        </div>
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
