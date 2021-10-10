import PropTypes from "prop-types";
import s from "./ContactList.module.scss";
import ContactElement from "../ContactElement"

const Contacts = ({ onDeleteContact, list }) => {
  console.log(list);
  if (list.length === 0) return null;
  return (
    <ul className={s.filterList}>
      {list.map(({ id, number, name }) => (
        <li className={s.filterListItem} key={id}>
          <ContactElement name={name} number={number} onDeleteContact={() => onDeleteContact(id)}  />
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default Contacts;
