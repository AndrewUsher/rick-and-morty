import PropTypes from 'prop-types'
import React from 'react'

const Episode = ({ content }) => {
  return (
    <div className="List-Item">
      <h3>{content.name}</h3>
      <p>
        <span className="title">Air Date</span>
        {content.air_date}
      </p>
      <p>
        <span className="title">Episode</span>
        {content.episode}
      </p>
    </div>
  )
}

Episode.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
  })
}

export default Episode
