import { GlobalStyle } from './GlobalStyle';
import  { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';


export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts  />
      <GlobalStyle />
      <Toaster />
    </div>
  );
};