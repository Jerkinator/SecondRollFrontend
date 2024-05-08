import { useState, useEffect } from "react";

const initProfile = {
  userName: null,
  adress: null,
};

const Fetch = () => {
  // Initialize state variables.
  const [profile, setProfile] = useState(initProfile);

  // Retrieves the user ID from local storage, so that the logged in user gets their own profile.
  var user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Function to get data from our backend API.
    const getProfile = async () => {
      const response = await fetch(
        "http://localhost:8080/api/users/" + user.id,

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
        adress: data.adress_city,
      });
    };
    // Load SecondRoll profile-data from API when component mounts.
    getProfile();
  }, []);

  return (
    <div className="userContainer">
      <h3>{`Hej ${profile.userName}!`}</h3>
      <h3>{`Adress: ${profile.adress}`}</h3>
    </div>
  );
};

export default Fetch;
