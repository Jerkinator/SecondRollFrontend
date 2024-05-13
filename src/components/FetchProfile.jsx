import { useState, useEffect } from "react";

const initProfile = {
  userName: null,
  firstName: null,
  lastName: null,
  adress: null,
  email: null,
  rating: null,
};

const FetchProfile = () => {
  // Initialize state variables.
  const [profile, setProfile] = useState(initProfile);

  // Retrieves the user ID from local storage, so that the logged in user gets their own profile.
  var user = JSON.parse(localStorage.getItem("user"));

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
    <div className="userContainer">
      <h3>{`Hej ${profile.userName}!`}</h3>
      <h3>{`Förnamn: ${profile.firstName}`}</h3>
      <h3>{`Efternamn:  ${profile.lastName}`}</h3>
      <h3>{`Adress: ${profile.adress}`}</h3>
      <h3>{`Email: ${profile.email}`}</h3>
      <h3>{`Ditt betyg: ${profile.rating}`}</h3>
    </div>
  );
};

export default FetchProfile;
