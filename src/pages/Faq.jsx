import { useState } from "react";
import Modal from "../components/Modal";
import AxiosRollDice from "../components/AxiosRollDice";

function Faq() {
  const [status, setStatus] = useState(false);

  return (
    <div className="container">
      {status && (
        <Modal close={() => setStatus(false)}>
          <div className="container">
            <p>Random game ad info here</p>
          </div>
        </Modal>
      )}
      <button onClick={() => setStatus(true)}>
        <img src="images\RolltheDice.png" alt="rtd-button"></img>
      </button>
    </div>
  );
}

export default Faq;
