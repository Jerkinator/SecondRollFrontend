import { MdClose } from "react-icons/md";
import "./Modal.css";
import WishlistIcon from "./WishlistIcon";

const Modal = ({ children, close }) => {
  return (
    <div className="overlay">
      <div className="content">
        <MdClose className="close" onClick={close} />

        {children}
      </div>{" "}
      <WishlistIcon className="heart-icon" />
    </div>
  );
};

export default Modal;
