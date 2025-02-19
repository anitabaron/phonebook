import Modal from "react-modal";
import { ModalConfirmProps } from "src/types/types";

export default function ModalConfirm({
  isOpen,
  onRequestClose,
  onConfirm,
}: ModalConfirmProps) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Confirm</h2>
        <button onClick={onConfirm}>Yes, delete</button>
        <button onClick={onRequestClose}>Cancel</button>
      </Modal>
    </>
  );
}
