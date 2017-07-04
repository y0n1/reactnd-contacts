import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ContactsList from './ContactsList'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    async function getAllAsync() { 
      try {
        const contacts = await ContactsAPI.getAll()
        this.setState({contacts})
      } catch (error) {
        alert(error.message)
      }
    }

    return getAllAsync.bind(this)()
  }

  handleRemoveContact(contact) {
    const byContactId = _contact => _contact.id !== contact.id
    this.setState({contacts: this.state.contacts.filter(byContactId)})
    
    async function removeAsync() {
      try {
        ContactsAPI.remove(contact)
      } catch (error) {
        alert(error)
      }
    }
    
    removeAsync()
  }
  handleRemoveContact = this.handleRemoveContact.bind(this)

  handleCreateContact(history) {
    async function createContactAsync(contact) {
      try {
        ContactsAPI.create(contact)
        this.setState((prevState) => ({
          contacts: prevState.contacts.concat([contact])
        }))
        history.push('/')
      } catch (error) {
        alert(error.message)
      }
    }

    return createContactAsync.bind(this)
  }
  handleCreateContact = this.handleCreateContact.bind(this)
  
  render() {
    const _ContactList_ = () => (<ContactsList onRemoveContact={this.handleRemoveContact} contacts={this.state.contacts}/>)
    const _CreateContact_ = ({history}) => (<CreateContact onCreateContact={this.handleCreateContact(history)}/>)
    return (
      <div className="app">
        <Route path="/" exact render={_ContactList_}></Route>
        <Route path="/create" render={_CreateContact_}></Route>
      </div>
    )
  }
}

export default App;
