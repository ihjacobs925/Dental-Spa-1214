import React, { Component } from 'react'

class Service extends Component {
  render() {
    console.log(this.props)
    if (!this.props.name) return <h3>We don't have that service yet!</h3>
    return (
      <div className="service-deet">
        <h3>{this.props.name}</h3>
        <h6>USD${this.props.price}</h6>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Service