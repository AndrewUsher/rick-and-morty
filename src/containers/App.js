import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Characters from '../components/Characters'
import Locations from '../components/Locations'
import Episodes from '../components/Episodes'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/episodes" component={Episodes} />
        </div>
      </BrowserRouter>
    )
  }
}
