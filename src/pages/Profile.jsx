import UserIcon from "../components/UserIcon";
import { useState, useEffect } from "react";
import ReusableButton from "../components/ReusableButton";
import { Link } from "react-router-dom";

//TODO: flytta in allt från FetchProfile så att datan sätts här
const initProfile = {
  userName: null,
  firstName: null,
  lastName: null,
  adress: null,
  email: null,
  rating: null,
};

const Profile = () => {
  // Retrieves the user ID from local storage, so that the logged in user gets their own profile.
  let user = JSON.parse(localStorage.getItem("user"));
  const [profile, setProfile] = useState(initProfile);

  useEffect(() => {
    // Function to get data from our backend API.
    const getProfile = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/profile/` + user.username,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();

      // Update the state with response.
      setProfile({
        userName: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        adress: data.adress_city,
        email: data.email,
        rating: data.averageRating,
      });
    };
    // Load SecondRoll profile-data from API when component mounts.
    getProfile();
  }, []);

  return (
    <>
      <div className="userContainer">
        <div className="user-info">
          <h3>{`Hej ${profile.userName}!`}</h3>
          <h3>{`Förnamn: ${profile.firstName}`}</h3>
          <h3>{`Efternamn:  ${profile.lastName}`}</h3>
          <h3>{`Adress: ${profile.adress}`}</h3>
          <h3>{`Email: ${profile.email}`}</h3>
          <h3>{`Ditt betyg: ${profile.rating}`}</h3>
        </div>

        <div className="wishlist-btn">
          <Link to={`/wishlist`}>
            <ReusableButton>Visa önskelista</ReusableButton>
          </Link>
        </div>

        <div className="icon-container">
          <UserIcon
            images={[
              "/images/ProfileIcon.png",
              "/images/ProfileIconBlue.png",
              "/images/ProfileIconGreen.png",
              "/images/ProfileIconRed.png",
            ]}
          ></UserIcon>
        </div>
      </div>
    </>
  );
};

export default Profile;
