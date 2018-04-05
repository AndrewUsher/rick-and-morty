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

export default Episode
