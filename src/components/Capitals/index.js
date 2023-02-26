import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].country}

  findContry = event => {
    const two = countryAndCapitalsList.filter(
      one => one.id === event.target.value,
    )
    this.setState({capital: two[0].country})
  }

  render() {
    const {capital} = this.state

    return (
      <div className="container">
        <div className="bg-container">
          <h1>Countries And Capitals</h1>
          <div className="sm-container">
            <select onChange={this.findContry}>
              {countryAndCapitalsList.map(contry => (
                <option key={contry.id} value={contry.id}>
                  {contry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <div>
            <h1>{capital}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
