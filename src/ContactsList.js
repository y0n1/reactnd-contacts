import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContactsListItem from './ContactsListItem'

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }
  
  render () {
    return (
      <ol className='contact-list'>
        {
          this.props.contacts.map(contact => (
            <ContactsListItem onRemoveContact={this.props.onRemoveContact} key={contact.id} contact={contact} />
          ))
        }
      </ol>
    )
  }
}

export default ContactsList