import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleOnSubmit(event) {
    event.preventDefault()
    const values = serializeForm(event.target, {hash: true})
    values.id = values.email
    if (this.props.onCreateContact) {
      this.props.onCreateContact(values)
    }
  }
  handleOnSubmit = this.handleOnSubmit.bind(this)

  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">Close</Link>
        <form onSubmit={this.handleOnSubmit} className="create-contact-form">
          <ImageInput className='create-contact-avatar-input' name="avatarURL" maxHeight={64}></ImageInput>
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
