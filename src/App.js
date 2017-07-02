import React, { Component } from 'react'
import ContactsList from './ContactsList'

class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  removeContact(contact) {
    const contactId = _contact => _contact.id !== contact.id
    this.setState({contacts: this.state.contacts.filter(contactId)})
  }

  render() {
    return (
        <ContactsList onRemoveContact={this.removeContact.bind(this)} contacts={this.state.contacts} />
    )
  }
}

export default App;
