import React from 'react'
import { Link } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { useGetLocations } from '../services/useGetLocations'
import Location from './Location'

const Locations = () => {
  const { data, fetchNextPage, hasNextPage } = useGetLocations()

  if (!data) {
    return (
      <div className="List-Container Locations">
        <h2>Like what you see? Watch the entire show on Netflix!</h2>
      </div>
    )
  }

  return (
    <div className="List-Container Locations">
      <h2>Like what you see? Watch the entire show on Netflix!</h2>
      <div className="List-Grid">
        {data ? data.pages.map(page => page.results.map(location => (
          <Link to={`/locations/${location.id}`} key={location.id}>
            <Location content={location} />
          </Link>
        ))) : <PropagateLoader size={25} />}
      </div>
      {hasNextPage && <button onClick={fetchNextPage}>Show More</button>}
    </div>
  )
}

export default Locations
