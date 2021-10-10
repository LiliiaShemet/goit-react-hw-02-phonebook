import PropTypes from 'prop-types';
import s from './ContactElement.module.scss';

const ContactElement = ({ name, number, id, onDeleteContact }) => (
    <div>
        <p className={s.text}>
                {name}: <span className={s.span}>{number}</span>
            </p>

            <button
                className={s.btn}
                onClick={() => onDeleteContact(id)}
                type="button"
            >
                delete
            </button>
    </div>
);

ContactElement.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactElement;
