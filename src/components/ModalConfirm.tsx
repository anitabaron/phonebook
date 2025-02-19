import Modal from "react-modal";
import { ModalConfirmProps } from "src/types/types";

export default function ModalConfirm({
  isOpen,
  onRequestClose,
  onConfirm,
}: ModalConfirmProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Are you sure?</h2>
      <p>This action cannot be undone.</p>
      <div className="modal-buttons">
        <button onClick={onConfirm} className="confirm-button">
          Yes, delete
        </button>
        <button onClick={onRequestClose} className="cancel-button">
          Cancel
        </button>
      </div>
    </Modal>
  );
}
