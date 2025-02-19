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
      contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  );

  return (
    <>
      <h2>Contact List:</h2>
      {filteredContacts.length !== 0 ? (
        <div className="phoneList">
          {filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
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
