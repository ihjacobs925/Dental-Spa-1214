import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import serviceDetails from './data/serviceDetails'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import Header from './components/partials/Header'
import Service from './components/pages/Service'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" render={() => <Services services={serviceDetails} />} />
          <Route path="/services/:id" render={(props) => <Service {...props} />} />
        </main>
      </Router>
    )
  }
}

export default App
