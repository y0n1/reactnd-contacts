import React from 'react'
import PropTypes from 'prop-types'

function ContactDetails(props) {
  return (
    <div className='contact-details'>
      <p>{props.name}</p>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </div>
  )
}

ContactDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default ContactDetails
