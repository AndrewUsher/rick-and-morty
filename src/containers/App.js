import React, { Component, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HashRouter, Route } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const Characters = React.lazy(() => import('../components/Characters'))
const Locations = React.lazy(() => import('../components/Locations'))
const Episodes = React.lazy(() => import('../components/Episodes'))
const SingleCharacter = React.lazy(() => import('../components/SingleCharacter'))
const SingleLocation = React.lazy(() => import('../components/SingleLocation'))
const SingleEpisode = React.lazy(() => import('../components/SingleEpisode'))

const client = new QueryClient()

export default class App extends Component {
  render () {
    return (
      <QueryClientProvider client={client}>
        <HashRouter>
          <div>
            <Navbar />
            <Suspense fallback={<PropagateLoader size={25} />}>
              <Route exact path="/" component={Home} />
              <Route exact path="/characters" component={Characters} />
              <Route exact path="/locations" component={Locations} />
              <Route exact path="/episodes" component={Episodes} />
              <Route exact path="/characters/:id" component={SingleCharacter} />
              <Route exact path="/locations/:id" component={SingleLocation} />
              <Route exact path="/episodes/:id" component={SingleEpisode} />
            </Suspense>
          </div>
        </HashRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
  }
}
