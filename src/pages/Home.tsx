import DocumentTitle from "../components/DocumentTitle";

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <h2>Welcome to the PHONEBOOK App</h2>
      <p>
        The <strong>Phonebook App</strong> is a simple and intuitive contact
        management tool built with modern web technologies. It allows users to{" "}
        <strong>add and delete</strong> contacts efficiently, providing a{" "}
        <em>user-friendly interface</em>
        for keeping track of important phone numbers.
      </p>

      <h3>Features</h3>
      <ul>
        <li>
          <strong>Add New Contacts:</strong> Easily create new entries with a
          name and phone number.
        </li>
        <li>
          <strong>Edit Contacts:</strong> Modify existing contact details{" "}
          <em>(feature in progress)</em>.
        </li>
        <li>
          <strong>Delete Contacts:</strong> Remove contacts that are no longer
          needed.
        </li>
        <li>
          <strong>Search Functionality:</strong> Quickly find contacts using the
          search bar.
        </li>
        <li>
          <strong>Responsive Design:</strong> Enjoy a seamless experience on
          both desktop and mobile.
        </li>
      </ul>

      <h3>Future Development Possibilities</h3>
      <ul>
        <li>
          <strong>Birthday Reminders:</strong> The application could
          automatically remind you of upcoming birthdays for your contacts by
          sending notifications or suggesting greeting ideas. This feature would
          help you maintain relationships and ensure you never miss an important
          date.
        </li>
        <li>
          <strong>Refreshing Connections with Friends:</strong> A feature that
          periodically suggests reconnecting with older friends. This could
          include reminders to reach out, suggestions for meet-ups, or a
          note-taking option to log the last interaction, encouraging regular
          contact.
        </li>
        <li>
          <strong>Regular Meeting Tracker:</strong> An integrated tracker to
          monitor the frequency of your meetings with contacts. Users could set
          goals (e.g., meeting at least once a month), with the app reminding
          them to schedule the next meeting or recording past meetings to better
          organize their social life.
        </li>
      </ul>

      <h3>Usage</h3>
      <p>Once the application is running, you can:</p>
      <ul>
        <li>
          <strong>Add a Contact:</strong> Click on the <em>"Add Contact"</em>{" "}
          button and fill in the required fields.
        </li>
        <li>
          <strong>Edit a Contact:</strong> Click on the <em>"Edit"</em> icon
          next to a contact to update their details{" "}
          <em>(feature in progress)</em>.
        </li>
        <li>
          <strong>Delete a Contact:</strong> Click on the <em>"Delete"</em> icon
          to remove a contact from the list.
        </li>
        <li>
          <strong>Search Contacts:</strong> Use the search bar at the top to
          filter contacts by name or phone number.
        </li>
      </ul>
    </>
  );
}
