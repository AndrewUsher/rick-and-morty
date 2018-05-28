import PropTypes from 'prop-types'
import React from 'react'

const Character = ({ content }) => {
  return (
    <div className="List-Item">
      <img alt={content.name} src={content.image} />
      <h3>{content.name}</h3>
      <p>
        <span className="title">Species</span>
        {content.species}
      </p>
      <p>
        <span className="title">Origin</span>
        {content.origin.name}
      </p>
      <p>
        <span className="title">Location</span>
        {content.location.name}
      </p>
      <p>
        <span className="title">Status</span>
        {content.status}
      </p>
      <p>
        <span className="title">Gender</span>
        {content.gender}
      </p>
    </div>
  )
}

Character.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  })
}

export default Character
