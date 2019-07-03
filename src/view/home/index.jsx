import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
  renderState(name, flag) {
    return flag ? <p><span>{name}</span></p> :" this is aaa"
  }
  render() {
    let {flag} = this.props
    return (
      <div>
        {
          this.renderState('this is fuck',flag)
        }
      </div>
    )

  }
}

export default Home
