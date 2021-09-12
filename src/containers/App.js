import React, { Component } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../components/Home'
import Locations from '../components/Locations'
import Loadmang from '../components/Loadmang'
import Navbar from '../components/Navbar'

const Characters = Loadmang(() => import('../components/Characters'))
// const Locations = Loadmang(() => import('../components/Locations'))
const Episodes = Loadmang(() => import('../components/Episodes'))
const SingleCharacter = Loadmang(() => import('../components/SingleCharacter'))
const SingleLocation = Loadmang(() => import('../components/SingleLocation'))
const SingleEpisode = Loadmang(() => import('../components/SingleEpisode'))

const client = new QueryClient()

export default class App extends Component {
  render () {
    return (
      <QueryClientProvider client={client}>
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/episodes" component={Episodes} />
            <Route exact path="/characters/:id" component={SingleCharacter} />
            <Route exact path="/locations/:id" component={SingleLocation} />
            <Route exact path="/episodes/:id" component={SingleEpisode} />
          </div>
        </HashRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
  }
}
