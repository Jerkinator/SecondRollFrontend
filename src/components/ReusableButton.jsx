import "./ReusableButton.css";

const ReusableButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="reuseable-button">
      {children}
    </button>
  );
};

export default ReusableButton;

// Example
// Simply put the text you wish the button to show inside the ReusableButton-component, ex;
// <ReusableButton>Logga in</ReusableButton>
// <ReusableButton>Registrera</ReusableButton>
