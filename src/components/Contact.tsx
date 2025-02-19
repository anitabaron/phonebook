import { deleteContact } from "../redux/contacts/operations";
import { useAppDispatch } from "../redux/hooks/useDispatch";

interface ContactProps {
  id: string;
  name: string;
  number: string;
}

const Contact = ({ id, name, number }: ContactProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <div className="contact-form">
        <div className="personData" key={id} id={id}>
          <h4>{name}</h4>
          <p>☎ {number}</p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
