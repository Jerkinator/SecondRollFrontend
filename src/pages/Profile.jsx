import FetchProfile from "../components/FetchProfile";
import UserIcon from "../components/UserIcon";

//TODO: flytta in allt från FetchProfile så att datan sätts här

const Profile = () => {
  return (
    <div>
      <UserIcon
        images={[
          "/images/ProfileIcon.png",
          "/images/ProfileIconBlue.png",
          "/images/ProfileIconGreen.png",
          "/images/ProfileIconRed.png",
        ]}
      ></UserIcon>
      {/*  <FetchProfile></FetchProfile> */}
    </div>
  );
};

export default Profile;
