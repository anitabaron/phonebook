import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contacts/selectors";
import { selectFilter } from "../redux/filters/selectors";
import { ContactType } from "src/types/types";

const ContactList = () => {
  const contacts = useSelector(selectContacts) as ContactType[];
  const statusFilter = useSelector(selectFilter);

  const filteredContacts = (contacts || []).filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes(statusFilter.name.toLowerCase())
  );

  return (
    <>
      <h2>Contact List:</h2>
      {filteredContacts.length !== 0 ? (
        <div className="contact-list">
          {filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </div>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default ContactList;
