import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactsListItem from './ContactsListItem'
import escapeStringRegexp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  handleUpdateQuery(event) {
    const query = event.target.value.trim()
    this.setState({ query })
  }
  handleUpdateQuery = this.handleUpdateQuery.bind(this)

  render() {
    let showingContacts
    if (this.state.query) {
      const match = new RegExp(escapeStringRegexp(this.state.query, 'i'))
      showingContacts = this.props.contacts.filter(contact => match.test(contact.name))
    } else {
      showingContacts = this.props.contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input className='search-contacts' placeholder='Search contacts' type="text" value={this.state.query} onChange={this.handleUpdateQuery} />
        </div>
        <ol className='contact-list'>
          {
            showingContacts.map(contact => (
              <ContactsListItem onRemoveContact={this.props.onRemoveContact} key={contact.id} contact={contact} />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default ContactsList