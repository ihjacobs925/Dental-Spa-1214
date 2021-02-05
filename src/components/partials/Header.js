import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    let logo = 'http://assets.stickpng.com/images/580b585b2edbce24c47b2a21.png'

    return (
      <header className="App-header">
        <nav>
          <Link to="/">Go to the Home Page</Link>{' | '}
          <Link to="/contact">Contact Us!</Link>{' | '}
          <Link to="/services">See Our Services</Link>
        </nav>
        <img src={logo} className="App-logo" alt="Logo for Dental Spa" />
      </header>
    )
  }
}

export default Header