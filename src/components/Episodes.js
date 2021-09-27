import React from 'react'
import { Link } from 'react-router-dom'
import { useGetEpisodes } from '../services/useGetEpisodes'
import Episode from './Episode'
import { LoadingSpinner } from './LoadingSpinner'

const Episodes = () => {
  const { data, fetchNextPage, hasNextPage } = useGetEpisodes()

  return (
    <div className="List-Container Episodes">
      <h2>Like what you see? Watch the entire show on Netflix!</h2>
      <div className="List-Grid">
        {data ? data.pages.map(page => page.results.map(episode => (
          <Link to={`/episodes/${episode.id}`} key={episode.id}>
            <Episode content={episode} />
          </Link>
        ))) : <LoadingSpinner />}
      </div>
      {hasNextPage && <button onClick={fetchNextPage}>Show More</button>}
    </div>
  )
}

export default Episodes
