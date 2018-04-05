import React, { Component } from 'react'
import { PropogateLoader } from 'react-spinners'
import Location from './Location'

class Locations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pageNumber: 2
    }

    this.fetchLocations = this.fetchLocations.bind(this)
  }

  componentDidMount () {
    this.fetchLocations()
  }

  fetchLocations () {
    fetch(`https://rickandmortyapi.com/api/location/`)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        this.setState({
          data: results
        })
      })
  }

  nextPage (pageNumber) {
    fetch(`https://rickandmortyapi.com/api/location?page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        this.setState(prevState => {
          return {
            data: prevState.data.concat(results),
            pageNumber: prevState.pageNumber + 1
          }
        })
      })
  }

  render () {
    let output
    if (this.state.data === []) {
      output = (
        <div className="List-Container">
          <h2>Like what you see? Watch the entire show on Netflix!</h2>
          <PropogateLoader size={25} />
        </div>
      )
    } else {
      output = (
        <div className="List-Container">
          <h2>Like what you see? Watch the entire show on Netflix!</h2>
          <div className="List-Grid">
            {this.state.data.map(location => <Location content={location} key={location.id} />)}
          </div>
          <button onClick={this.nextPage.bind(this, this.state.pageNumber)}>Show More</button>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

export default Locations
