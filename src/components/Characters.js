import React, { Component } from 'react'
import { PropogateLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import Character from './Character'

class Characters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pageNumber: 2
    }

    this.fetchCharacters = this.fetchCharacters.bind(this)
  }

  componentDidMount () {
    this.fetchCharacters()
  }

  fetchCharacters () {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        this.setState({
          data: results
        })
      })
  }

  nextPage (pageNumber) {
    fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
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
    console.log('op')
    if (!this.state.data) {
      output = (
        <div className="List-Container Characters">
          <h2>Like what you see? Watch the entire show on Netflix!</h2>
          <PropogateLoader size={25} />
        </div>
      )
    } else {
      output = (
        <div className="List-Container Characters">
          <h2>Like what you see? Watch the entire show on Netflix!</h2>
          <div className="List-Grid">
            {this.state.data.map(character => (
              <Link to={'/characters/' + character.id} key={character.id}>
                <Character content={character} />
              </Link>
            ))}
          </div>
          <button onClick={this.nextPage.bind(this, this.state.pageNumber)}>Show More</button>
        </div>
      )
    }
    return <div>{output}</div>
  }
}

export default Characters
