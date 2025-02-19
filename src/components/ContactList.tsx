import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contacts/selectors";
import { selectFilter } from "../redux/filters/selectors";
import { ContactType } from "src/types/types";

const ContactList = () => {
  const contacts = useSelector(selectContacts) as ContactType[];
  const { name, number } = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) => {
    const nameMatches = name
      ? contact.name.toLowerCase().includes(name.toLowerCase())
      : true; // Jeśli `name` jest pusty, zawsze zwraca `true`

    const numberMatches = number ? contact.number.includes(number) : true; // Jeśli `number` jest pusty, zawsze zwraca `true`

    return nameMatches && numberMatches; // Kontakty przechodzą, jeśli przynajmniej jeden filtr pasuje
  });

  return (
    <>
      <h2>Contact List:</h2>
      {filteredContacts.length > 0 ? (
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
