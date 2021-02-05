import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Services extends Component {
  render() {
    let serviceList = this.props.services.map((service, i) => (
      <li key={`service-${i}`}>
        <Link to={`/services/${service.id}`} >{service.name}</Link> 
      </li>
    ))
    return (
      <div>
        <h1>Services</h1>
        <ul>
          {serviceList}
        </ul>
      </div>
    )
  }
}

export default Services