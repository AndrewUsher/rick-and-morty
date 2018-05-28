import PropTypes from 'prop-types'
import React, { Component } from 'react'
import BackButton from './BackButton'
import Loader from './Loader'

class SingleEpisode extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
  }

  render () {
    const { name, episode } = this.state.data
    let output
    if (!this.state.data) {
      output = <Loader />
    } else {
      output = (
        <div className="Single-Info-Container">
          <BackButton to="/episodes" />
          <div className="Single-Info Episode">
            <div className="Single-Info-Text">
              <h2>{name}</h2>
              <p>
                <span className="title">Air Date</span>
                {this.state.data.air_date}
              </p>
              <p>
                <span className="title">Episode Code</span>
                {episode}
              </p>
            </div>
          </div>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

SingleEpisode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default SingleEpisode
