import React from 'react'
import PropTypes from 'prop-types'
import logo from '../sun.svg'

const Header = (props) => {
  if (!props.city.name) {
    return(
      <header className="App-header">
        <h1>Weather <span><img src={logo} className="App-logo" alt="logo" /></span> Forecast</h1>
      </header>
    )
  } else {
    return (
      <header className="App-header">
          <h1>Weather <span><img src={logo} className="App-logo" alt="logo" /></span> Forecast</h1>
          <h2>{props.city.name}, {props.city.country}</h2>
      </header>
    )
  }
}

Header.propTypes = {
  city: PropTypes.object.isRequired
}

export default Header
