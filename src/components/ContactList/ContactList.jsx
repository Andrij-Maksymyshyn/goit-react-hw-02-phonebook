import React from 'react';
import PropTypes from 'prop-types';
import { UlContacts, LiContact, ButtonDelete } from './ContactList.styled';

const ContactList = ({ visibleContacts, onDeleteContact }) => (
  <UlContacts>
    {visibleContacts.map(({ id, name, number }) => (
      <LiContact key={id}>
        {name}: {number}
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </ButtonDelete>
      </LiContact>
    ))}
  </UlContacts>
);

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
