import React, { Component } from 'react'

class Service extends Component {
  render() {
    return (
      <div>
        <h1>Service at id: {this.props.match.params.id}</h1>
      </div>
    )
  }
}

export default Service