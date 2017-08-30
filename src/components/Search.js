import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
  searchCity(e) {
    e.preventDefault()
    this.props.searchCity(this.refs.newCity.value)
  }

  render() {
    return (
      <div id="handleChange">
        <form id="search-city">
          <span>Units: </span>
          <select type="text" name="units" placeholder="units" onChange={(e) => this.props.changeUnits(e.target.value)} >
            <option value="metric">Celsius</option>
            <option value="imperial">Fahrenheit</option>
          </select>

          <input type="text" name="searchCity" placeholder="Your City Name" ref="newCity" required />
          <button id="button" type="submit" onClick={(e) => this.searchCity(e)}>Search</button>
        </form>
      </div>
    )
  }
}

Search.PropTypes = {
  searchCity: PropTypes.func.isRequired,
  changeUnits: PropTypes.func.isRequired
}

export default Search
