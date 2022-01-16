import React from 'react';
import PropTypes from 'prop-types';
import { UlContacts, LiContact } from './ContactList.styled';

const ContactList = ({ visibleContacts }) => (
  <UlContacts>
    {visibleContacts.map(({ id, name, number }) => (
      <LiContact key={id}>
        {name}: {number}
      </LiContact>
    ))}
  </UlContacts>
);

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
