import { useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress_street, setAdress_street] = useState("");
  const [adress_zip, setAdress_zip] = useState("");
  const [adress_city, setAdress_city] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("http://localhost:8080/api/users/all")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("User already exists with that email!");
    } else {
      const user = {
        username,
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        adress_street,
        adress_zip,
        adress_city,
      };
      axios
        .post("http://localhost:8080/api/auth/signup", user)
        .then(alert("User successfully Created!"));
    }
  };

  return (
    <div className="register-container">
      <Card>
        <form className="form-container">
          <h1>Skapa Konto</h1>
          <label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Förnamn"
              value={fName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Efternamn"
              value={lName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="phone"
              placeholder="Telefonnummer"
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Gatuadress"
              value={street}
              onChange={(e) => setAdress_street(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Postkod"
              value={zip}
              onChange={(e) => setAdress_zip(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Stad"
              value={city}
              onChange={(e) => setAdress_city(e.target.value)}
            />
          </label>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Registrera
          </button>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
