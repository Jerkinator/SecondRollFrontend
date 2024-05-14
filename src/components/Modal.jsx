import { MdClose } from "react-icons/md";
import "./Modal.css";

const Modal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
        <MdClose className="close" onClick={close} />
        <h1>Game title</h1>
        {children}
      </div>
    </div>
  );
};

export default Modal;
