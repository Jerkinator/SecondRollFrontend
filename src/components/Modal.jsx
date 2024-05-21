import { MdClose } from "react-icons/md";
import "./Modal.css";

const Modal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
        <MdClose className="close" onClick={close} />

        {children}
      </div>{" "}
    </div>
  );
};

export default Modal;
