import React from 'react'
import { Link } from 'react-router-dom'

import { useGetCharacters } from '../services/useGetCharacters'
import Character from './Character'
import { LoadingSpinner } from './LoadingSpinner'

const Characters = () => {
  const { data, fetchNextPage, hasNextPage } = useGetCharacters()

  return (
    <div className="List-Container Characters">
      <h2>Like what you see? Watch the entire show on Netflix!</h2>
      <div className="List-Grid">
        {data ? data.pages.map(page => page.results.map(character => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <Character content={character} />
          </Link>
        ))) : <LoadingSpinner />}
      </div>
      {hasNextPage && <button onClick={fetchNextPage}>Show More</button>}
    </div>
  )
}

export default Characters
