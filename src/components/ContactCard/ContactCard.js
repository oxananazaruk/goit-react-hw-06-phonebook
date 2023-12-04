import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <span>{name}: </span>
      <span>{number} </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
