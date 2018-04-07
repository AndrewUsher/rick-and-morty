import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BackButton from './BackButton'
import Loader from './Loader'

class SingleCharacter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
  }

  render () {
    const { gender, image, name, species, status } = this.state.data
    let output
    if (!this.state.data) {
      output = <Loader />
    } else {
      output = (
        <div className="Single-Info-Container">
          <BackButton to="/characters" />
          <div className="Single-Info">
            <img src={image} />
            <div className="Single-Info-Text">
              <h2>{name}</h2>
              <p>
                <span className="title">Gender</span>
                {gender}
              </p>
              <p>
                <span className="title">Species</span>
                {species}
              </p>
              <p>
                <span className="title">Status</span>
                {status}
              </p>
            </div>
          </div>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

SingleCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default SingleCharacter
