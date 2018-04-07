import React, { Component } from 'react'
import BackButton from './BackButton'
import Loader from './Loader'

class SingleLocation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
  }

  render () {
    const { name, type, dimension } = this.state.data
    let output
    if (!this.state.data) {
      output = <Loader />
    } else {
      output = (
        <div className="Single-Info-Container Location">
          <BackButton to="/locations" />
          <div className="Single-Info Episode">
            <div className="Single-Info-Text">
              <h2>{name}</h2>
              <p>
                <span className="title">Type</span>
                {type}
              </p>
              <p>
                <span className="title">Dimension</span>
                {dimension}
              </p>
            </div>
          </div>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

export default SingleLocation
