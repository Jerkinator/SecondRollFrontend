import "./ReusableButton.css";

const ReusableBtnForm = ({ children }) => {
  return (
    <button type="submit" className="reuseable-button">
      {children}
    </button>
  );
};

export default ReusableBtnForm;
