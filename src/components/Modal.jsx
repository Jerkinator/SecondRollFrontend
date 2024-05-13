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

function ModalExampleContentImage() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <ModalHeader>Upload image</ModalHeader>
      <ModalContent image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png"
          wrapped
        />
        <ModalDescription>
          <p>Would you like to upload this image?</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ModalExampleContentImage;
