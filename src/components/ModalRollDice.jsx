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

function ModalRollDice() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button>
          {" "}
          <img src="images\RolltheDice.png" alt="rtd-button"></img>
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <ModalHeader>Title</ModalHeader>
      <ModalContent image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png"
          wrapped
        />
        <ModalDescription>
          <p>Game info</p>
        </ModalDescription>
      </ModalContent>
      <AxiosRollDice />
      <ModalActions>
        <Button onClick={() => setOpen(false)}>Go to game ad</Button>
        <Button onClick={() => setOpen(false)} positive>
          Buy
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ModalRollDice;
