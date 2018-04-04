import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Characters from '../components/Characters'

export default class App extends Component {
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
    return (
      <div>
        <Navbar />
        <Characters list={this.state.data} buttonClicked={this.nextPage.bind(this, this.state.pageNumber)} />
      </div>
    )
  }
}
