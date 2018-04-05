import React, { Component } from 'react'
import { PropogateLoader } from 'react-spinners'
import Episode from './Episode'
class Episodes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pageNumber: 2
    }

    this.fetchEpisodes = this.fetchEpisodes.bind(this)
  }

  componentDidMount () {
    this.fetchEpisodes()
  }

  fetchEpisodes () {
    fetch(`https://rickandmortyapi.com/api/episode/`)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        this.setState({
          data: results
        })
      })
  }

  nextPage (pageNumber) {
    fetch(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)
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
    if (!this.state.data) {
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
            {this.state.data.map(episode => <Episode content={episode} key={episode.id} />)}
          </div>
          <button onClick={this.nextPage.bind(this, this.state.pageNumber)}>Show More</button>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

export default Episodes
