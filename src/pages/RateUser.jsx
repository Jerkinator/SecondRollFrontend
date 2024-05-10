import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import ReusableButton from "../components/ReusableButton";

const RateUser = () => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState();

  // Retrieves the logged in user from local storage.
  var currentUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, rating);

    if (!user || !rating) {
      alert("Please fill in all the fields");
      return;
      // If the logged in user's username is the same as the username that is being given a rating, throw an error message. Not allowed.
    } else if (user === currentUser.username) {
      alert("You cannot give yourself a rating!");
      return;
    }

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/` + user + "/rating",
        {
          user,
          rating,
        },
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "PUT",
        payload: data,
      });

      // Redirects user to Home when user has been rated.
      return navigate("/");
    } catch (err) {
      console.log("Error " + err);
    }
  };

  return (
    <div className="rating-container">
      <form className="rating-form" onSubmit={handleSubmit}>
        <h3>Skriv in användarnamnet på den du vill betygsätta</h3>
        <div>
          <input
            type="text"
            placeholder="Användarnamn"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            inputMode="numeric"
            pattern="[1-6]*"
            placeholder="Betyg 1-6"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <ReusableButton type="submit">Ge betyg</ReusableButton>
      </form>
    </div>
  );
};

export default RateUser;
