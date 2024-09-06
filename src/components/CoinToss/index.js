// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    activeImgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onTossTime = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0 ? this.setState((prevState)=>({heads:prevState.heads+1,total:prevState.total+1,activeImgUrl:'https://assets.ccbp.in/frontend/react-js/heads-img.png'})) : this.setState((prevState)=>({tails:prevState.tails+1,total:prevState.total+1,activeImgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png'}))
  }

  render() {
    const {activeImgUrl, total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={activeImgUrl} alt="toss result" className="toss-image" />
          <button onClick={this.onTossTime}>Toss Coin</button>
          <div className="result-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
