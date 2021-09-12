import PropTypes from 'prop-types'
import React from 'react'
import { useGetCharacter } from '../services/useGetCharacter'
import BackButton from './BackButton'
import Loader from './Loader'

const SingleCharacter = (props) => {
  const { data, isLoading } = useGetCharacter(props.match.params.id)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="Single-Info-Container">
      <BackButton to="/characters" />
      <div className="Single-Info">
        <img src={data.image} />
        <div className="Single-Info-Text">
          <h2>{data.name}</h2>
          <p>
            <span className="title">Gender</span>
            {data.gender}
          </p>
          <p>
            <span className="title">Species</span>
            {data.species}
          </p>
          <p>
            <span className="title">Status</span>
            {data.status}
          </p>
        </div>
      </div>
    </div>
  )
}

SingleCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default SingleCharacter
