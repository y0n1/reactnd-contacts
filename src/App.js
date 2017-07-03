import React, { Component } from 'react'
import ContactsList from './ContactsList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    (async function getAllAsync() { 
      try {
        const contacts = await ContactsAPI.getAll()
        this.setState({contacts})
      } catch (error) {
        alert(error.message)
      }
    }).bind(this)()
  }

  handleRemoveContact(contact) {
    const contactId = _contact => _contact.id !== contact.id
    this.setState({contacts: this.state.contacts.filter(contactId)})
    ContactsAPI.remove(contact)
  }
  handleRemoveContact = this.handleRemoveContact.bind(this)

  render() {
    return (
        <ContactsList onRemoveContact={this.handleRemoveContact} contacts={this.state.contacts} />
    )
  }
}

export default App;
