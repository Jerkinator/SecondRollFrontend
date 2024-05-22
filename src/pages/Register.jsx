import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import ReusableBtnForm from "../components/ReusableBtnForm";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress_street, setAdress_street] = useState("");
  const [adress_zip, setAdress_zip] = useState("");
  const [adress_city, setAdress_city] = useState("");

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !username ||
      !password ||
      !email ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !adress_street ||
      !adress_zip ||
      !adress_city
    ) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          username,
          password,
          email,
          firstName,
          lastName,
          phoneNumber,
          adress_street,
          adress_zip,
          adress_city,
        }
      );

      dispatch({
        type: "REGISTER",
        payload: data,
      });

      // Redirects user to Home when logged in.
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Skapa ny användare</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Förnamn"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Efternamn"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Telefon"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Gatuadress"
            value={adress_street}
            onChange={(e) => setAdress_street(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Postnummer"
            value={adress_zip}
            onChange={(e) => setAdress_zip(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Stad"
            value={adress_city}
            onChange={(e) => setAdress_city(e.target.value)}
          />
        </div>
        <div className="reg-btn">
          <ReusableBtnForm>Registrera</ReusableBtnForm>
        </div>
      </form>
    </div>
  );
};

export default Register;
