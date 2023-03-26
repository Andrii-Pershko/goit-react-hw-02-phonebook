import PropTypes from 'prop-types';

const ContactList = ({ contactList, onChange }) => {
  return (
    <ul>
      {contactList.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" id={id} onClick={onChange}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
