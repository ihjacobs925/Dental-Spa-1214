import React, { Component } from 'react'

class Services extends Component {
  render() {
    let serviceList = this.props.services.map((service, i) => (
      <li key={`service-${i}`}>{service}</li>
    ))
    console.log(this.props)

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