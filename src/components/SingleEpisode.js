import PropTypes from 'prop-types'
import React from 'react'
import { useGetEpisode } from '../services/useGetEpisode'
import BackButton from './BackButton'
import { LoadingSpinner } from './LoadingSpinner'

const SingleEpisode = (props) => {
  const { data, isLoading } = useGetEpisode(props.match.params.id)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="Single-Info-Container">
      <BackButton to="/episodes" />
      <div className="Single-Info Episode">
        <div className="Single-Info-Text">
          <h2>{data.name}</h2>
          <p>
            <span className="title">Air Date</span>
            {data.air_date}
          </p>
          <p>
            <span className="title">Episode Code</span>
            {data.episode}
          </p>
        </div>
      </div>
    </div>
  )
}

SingleEpisode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default SingleEpisode
