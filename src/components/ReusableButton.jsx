import "./ReusableButton.css";

const ReusableButton = ({ children }) => {
  return <button className="reuseable-button">{children}</button>;
};

export default ReusableButton;

// Example
// Simply put the text you wish the button to show inside the ReusableButton-component, ex;
// <ReusableButton>Logga in</ReusableButton>
// <ReusableButton>Registrera</ReusableButton>
