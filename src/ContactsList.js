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

  handleQueryReset() {
    this.setState({query: ''})
  }
  handleQueryReset = this.handleQueryReset.bind(this)

  render() {
    const { contacts, onRemoveContact } = this.props
    const { query } = this.state
    let showingContacts

    if (query) {
      const match = new RegExp(escapeStringRegexp(query, 'i'))
      showingContacts = contacts.filter(contact => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input className='search-contacts' placeholder='Search contacts' type="text" value={query} onChange={this.handleUpdateQuery} />
        </div>
        
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {showingContacts.length} of {contacts.length} total</span>
            <button onClick={this.handleQueryReset}>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
          {
            showingContacts.map(contact => (
              <ContactsListItem onRemoveContact={onRemoveContact} key={contact.id} contact={contact} />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default ContactsList