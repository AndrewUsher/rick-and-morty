import PropTypes from 'prop-types'
import React from 'react'

const Location = ({ content }) => {
  return (
    <div className="List-Item">
      <h3>{content.name}</h3>
      <p>
        <span className="title">Type</span>
        {content.type}
      </p>
      <p>
        <span className="title">Dimension</span>
        {content.dimension}
      </p>
    </div>
  )
}

Location.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired
  })
}

export default Location
