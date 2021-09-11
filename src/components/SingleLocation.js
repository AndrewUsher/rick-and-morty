import PropTypes from 'prop-types'
import React from 'react'
import { useGetLocation } from '../services/useGetLocation'
import BackButton from './BackButton'
import Loader from './Loader'

const SingleLocation = (props) => {
  const { data, isLoading } = useGetLocation(props.match.params.id)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <div className="Single-Info-Container Location">
        <BackButton to="/locations" />
        <div className="Single-Info Episode">
          <div className="Single-Info-Text">
            <h2>{data.name}</h2>
            <p>
              <span className="title">Type</span>
              {data.type}
            </p>
            <p>
              <span className="title">Dimension</span>
              {data.dimension}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

SingleLocation.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default SingleLocation
