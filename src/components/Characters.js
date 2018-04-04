import React from 'react'
import Character from './Character'
const Characters = props => {
  let output
  if (!props.list) {
    output = (
      <div className="Characters">
        <h2>Like what you see? Watch the entire show on Netflix!</h2>
        <p>Nothing here yet</p>
      </div>
    )
  } else {
    output = (
      <div className="Characters">
        <h2>Like what you see? Watch the entire show on Netflix!</h2>
        <div className="Characters-grid">
          {props.list.map(character => <Character content={character} key={character.id} />)}
        </div>
        <button onClick={props.buttonClicked}>Show More</button>
      </div>
    )
  }
  return <div>{output}</div>
}

export default Characters
