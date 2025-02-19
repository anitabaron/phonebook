import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contacts/selectors";
import { selectFilter } from "../redux/filters/selectors";
import { ContactType } from "src/types/types";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact: ContactType) => {
    const nameMatches = contact.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const numberMatches = contact.number.includes(filters.number);

    return nameMatches || numberMatches;
  });

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
