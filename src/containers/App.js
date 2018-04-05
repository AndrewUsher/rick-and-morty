import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loadmang from '../components/Loadmang'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const Characters = Loadmang(() => import('../components/Characters'))
const Locations = Loadmang(() => import('../components/Locations'))
const Episodes = Loadmang(() => import('../components/Episodes'))

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
