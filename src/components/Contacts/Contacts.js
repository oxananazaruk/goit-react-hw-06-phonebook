import { useSelector } from 'react-redux';
import { List, ListItem } from './Contacts.styled';
import { ContactCard } from '../ContactCard/ContactCard';

export const Contacts = () => {
  const items = useSelector(state => state.contacts);
  console.log(items);
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactCard contact={item} />
        </ListItem>
      ))}
    </List>
  );
};
