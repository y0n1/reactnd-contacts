import React from 'react'
import PropTypes from 'prop-types'
import ContactAvatar from './ContactAvatar'
import ContactDetails from './ContactDetails'

function ContactsListItem(props) {  
  return (
    <li className='contact-list-item'>
      <ContactAvatar url={props.contact.avatarURL} />
      <ContactDetails name={props.contact.name} email={props.contact.email}/>
      <button onClick={() => props.onRemoveContact(props.contact)} className='contact-remove'>Remove</button>
    </li>
  )
}

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired
}

export default ContactsListItem
