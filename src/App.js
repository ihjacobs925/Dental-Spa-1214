import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import Header from './components/partials/Header'

class App extends Component {
  render() {
    let services = [
      "Deep Cleaning",
      "Filling",
      "Gum Massage",
      "Root Canal",
      "Oral Mud Bath"
    ]
    return (
      <Router>
        <Header />
        <main className="App">
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" render={() => <Services services={services} />} />
        </main>
      </Router>
    )
  }
}

export default App
