import React from "react";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Image,
  Modal,
} from "semantic-ui-react";
import AxiosRollDice from "./AxiosRollDice";
import ReusableButton from "./ReusableButton";

function ModalRollDice() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
      <ModalHeader>{""}</ModalHeader>
      <ModalContent image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png"
          wrapped
        />
        <ModalDescription>
          <p>({})</p>
        </ModalDescription>
      </ModalContent>
      <AxiosRollDice />
      <ModalActions>
        <ReusableButton onClick={() => setOpen(false)}></ReusableButton>
        <ReusableButton onClick={() => setOpen(false)} positive>
          Buy game
        </ReusableButton>
      </ModalActions>
    </Modal>
  );
}

export default ModalRollDice;
