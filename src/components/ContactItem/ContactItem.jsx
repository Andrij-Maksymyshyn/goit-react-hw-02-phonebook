import React from 'react';
import PropTypes from 'prop-types';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <LiContact>
    {name}: {number}
    <ButtonDelete type="submit" onClick={() => onDeleteContact(id)}>
      Delete
    </ButtonDelete>
  </LiContact>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
