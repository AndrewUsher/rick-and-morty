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

export default Location
