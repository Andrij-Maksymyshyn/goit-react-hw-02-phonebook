import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactInfo = personData => {
    const person = {
      id: nanoid(),
      name: personData.name,
      number: personData.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, person],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactInfo} />

        {contacts[0] && (
          <>
            <h2>Contacts</h2>

            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList visibleContacts={this.getVisibleContacts()} />
          </>
        )}
      </Container>
    );
  }
}

export default App;
