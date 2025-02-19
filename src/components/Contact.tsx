import { ContactType } from "src/types/types";
import { deleteContact } from "../redux/contacts/operations";
import { AppDispatch } from "@redux/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ModalConfirm from "./ModalConfirm";

const Contact = ({ id, name, number }: ContactType): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  return (
    <div className="contact-card">
      <div className="contact-data" key={id} id={id}>
        <h4>{name}</h4>
        <p>{number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <ModalConfirm
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Contact;
