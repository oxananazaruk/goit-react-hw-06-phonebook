import { useSelector } from 'react-redux';
import { List, ListItem } from './Contacts.styled';
import { ContactCard } from '../ContactCard/ContactCard';

export const Contacts = () => {
  const items = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters.filters);

  const visibleContacts = () => {
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );
  };

  const itemContacts = visibleContacts();

  return (
    <List>
      {itemContacts.map(item => (
        <ListItem key={item.id}>
          <ContactCard contact={item} />
        </ListItem>
      ))}
    </List>
  );
};
