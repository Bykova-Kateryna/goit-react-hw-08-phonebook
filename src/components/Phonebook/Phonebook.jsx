import React from 'react';
import PhoneBookForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactsContainer, PhoneBookFormTittle } from './Phonebook.styled';

export default function PhoneBookSection() {
  return (
    <ContactsContainer>
      <div>
        <PhoneBookFormTittle>Add contact in PHONEBOOK</PhoneBookFormTittle>
        <PhoneBookForm />
      </div>
      <div>
        <PhoneBookFormTittle>My contacts</PhoneBookFormTittle>
        <Filter />
        <ContactList />
      </div>
    </ContactsContainer>
  );
}
