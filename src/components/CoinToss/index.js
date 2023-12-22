// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {activeImg: 0, heads: 0, tails: 0}

  onTossChange = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({activeImg: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {activeImg, heads, tails} = this.state
    console.log(activeImg)

    let imageUrl = ''
    if (activeImg === 1) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    }
    return (
      <div className="app-container">
        <div className="card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" />
          <button type="button" onClick={this.onTossChange}>
            Toss Coin
          </button>
          <div className="calculation">
            <p>Total: {heads + tails}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
