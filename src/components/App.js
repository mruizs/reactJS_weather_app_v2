import React from 'react'

import Header from './Header'
import Prevision from './Prevision'
import Search from './Search'
import Graph from './Graph'

class App extends React.Component {
  constructor() {
    super()

    this.searchCity = this.searchCity.bind(this)
    this.changeUnits = this.changeUnits.bind(this)

    this.state = {
      city: {},
      days: {},
      symbol: 'metric'
    }
  }

  changeUnits(symbol) {
    this.setState({ symbol })
  }

  searchCity(newCity) {
    const url = 'http://api.openweathermap.org/data/2.5/forecast/daily'
    let unit = 'metric'
    const days = 7
    const apiKey = '0c13455f76f055afc22e9a1cf9b67b7c'
    const requestUrl = `${url}?q=${newCity}&cnt=${days}&units=${unit}&APPID=${apiKey}`

    fetch(requestUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          city: json.city,
          days: json.list
        })
      }).catch((err) => console.log(err))
  }

  render() {
    if (!this.state.days[0]) {
      return(
        <div className="App">
          <Header city={this.state.city} />
          <Search searchCity={this.searchCity} changeUnits={this.changeUnits} />
        </div>
      )
    }

    return (
      <div className="App">
        <Header city={this.state.city} />
        <Search searchCity={this.searchCity} changeUnits={this.changeUnits} />
        <ul className="list-of-days">
          {
            Object
              .keys(this.state.days)
              .map(key => <Prevision
                key={key}
                index={key}
                day={this.state.days[key]}
                symbol={this.state.symbol}
              />)
          }
        </ul>
        <Graph days={this.state.days} />
      </div>
    );
  }
}

export default App
