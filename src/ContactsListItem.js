import React from 'react'

function ContactsListItem(props) {
  return (
    <li className='contact-list-item'>
      <div className="contact-avatar" style={{
        backgroundImage: `url(${props.contact.avatarURL})`
      }} ></div>
      <div className='contact-details'>
        <p>{props.contact.name}</p>
        <a href={`mailto:${props.contact.email}`}>{props.contact.email}</a>
      </div>
      <button onClick={() => props.onRemoveContact(props.contact)} className='contact-remove'>Remove</button>
    </li>
  )
}

export default ContactsListItem
