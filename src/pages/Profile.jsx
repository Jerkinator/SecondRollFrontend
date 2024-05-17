import FetchProfile from "../components/FetchProfile";
import UserIcon from "../components/UserIcon";


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
      <FetchProfile></FetchProfile>
    </div>
  );
};

export default Profile;
