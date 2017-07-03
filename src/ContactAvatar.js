import React from 'react'
import PropTypes from 'prop-types'

function ContactAvatar(props) {
  return (
    <div className="contact-avatar" style={{ backgroundImage: `url(${props.url})` }}></div>
  )
}

ContactAvatar.PropTypes = {
  url: PropTypes.string.isRequired
}

export default ContactAvatar
