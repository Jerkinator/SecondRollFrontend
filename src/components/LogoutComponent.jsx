const LogoutComponent = () => {
  return localStorage.removeItem("user"),
  localStorage.removeItem("cart"),
  console.log("User is logged out.");
};



{
  <button onClick={LogoutComponent}>Logga ut</button>; 
}

export default LogoutComponent;
