import { useState, useEffect } from "react";

const initProfile = {
  userName: null,
  name: null,
};

const Fetch = () => {
  // Initialize state variables.
  const [profile, setProfile] = useState(initProfile);

  useEffect(() => {
    // Function to get data from our backend API.
    const getProfile = async () => {
      const response = await fetch(
        "http://localhost:8080/api/users/65f2f74f6314cd054463a802",

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
        name: data.firstName,
      });
    };
    // Load SecondRoll profile-data from API when component mounts.
    getProfile();
  }, []);

  return (
    <div className="userContainer">
      <h3>{`Username: ${profile.userName}`}</h3>
      <h3>{`Name: ${profile.name}`}</h3>
    </div>
  );
};

export default Fetch;
