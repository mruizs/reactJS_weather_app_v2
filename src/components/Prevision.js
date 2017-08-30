import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ReactAnimatedWeather from 'react-animated-weather';

class Prevision extends React.Component {
  getIcon(id) {
    if (id <= 531) {
      return "RAIN"
    } else if (id <= 622) {
      return "SNOW"
    } else if (id <= 741) {
      return "FOG"
    } else if (id === 800) {
      return "CLEAR_DAY"
    } else if (id === 801) {
      return "PARTLY_CLOUDY_DAY"
    } else if (id <= 804) {
      return "CLOUDY"
    } else if (id <= 905) {
      return "WIND"
    }
  }

  displayTemp(temp, metric) {
    if (metric) {
      return Math.round(temp)
    } else {
      return Math.round((temp * 1.8) + 32)
    }
  }

  render() {
    const { day, symbol } = this.props
    const metric = symbol === 'metric'
    const unit = metric ? 'ºC' : 'ºF'

    if (moment.unix(day.dt).format("MMM Do") === moment().format("MMM Do")) {
      return(
        <div className="today">
          <h3>{moment.unix(day.dt).format("MMM Do")}</h3>
          <section>
            <ReactAnimatedWeather icon={this.getIcon(day.weather[0].id)} />
            <p>{this.displayTemp(day.temp.day, metric)} {unit}</p>
          </section>
          <p><span className="red">{this.displayTemp(day.temp.max, metric)} {unit}</span> / <span className="blue">{this.displayTemp(day.temp.min, metric)} {unit}</span></p>
          <p>{this.displayTemp(day.temp.morn, metric)} {unit} / {this.displayTemp(day.temp.eve, metric)} {unit} / {this.displayTemp(day.temp.night, metric)} {unit}</p>
        </div>
      )
    } else {
      return (
        <div className="prevision">
          <h3>{moment.unix(day.dt).format("MMM Do")}</h3>
          <ReactAnimatedWeather icon={this.getIcon(day.weather[0].id)} />
          <p><span className="red">{this.displayTemp(day.temp.max, metric)} {unit}</span> / <span className="blue">{this.displayTemp(day.temp.min, metric)} {unit}</span></p>
          <p>{this.displayTemp(day.temp.morn, metric)} {unit} / {this.displayTemp(day.temp.eve, metric)} {unit} / {this.displayTemp(day.temp.night, metric)} {unit}</p>
        </div>
      )
    }
  }
}

Prevision.PropTypes = {
  day: PropTypes.object.isRequired,
  symbol: PropTypes.string.isRequired
}

export default Prevision
