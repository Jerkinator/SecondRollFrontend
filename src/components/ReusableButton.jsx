import "./ReusableButton.css";

const ReusableButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="reuseable-button">
      {children}
    </button>
  );
};

export default ReusableButton;
