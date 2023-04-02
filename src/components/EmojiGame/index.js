/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

// EmojiGame js file

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.

import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLostCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    list: [],
    count: 0,
    isLost: false,
    isWon: false,
    maxScore: 0,
    startGame: false,
  }

  onPlayAgainButtonClick = () => {
    console.log('playagain is Clicked')
    this.setState({
      count: 0,
      startGame: true,
      list: [],
      isLost: false,
      isWon: false,
    })
  }

  onCardClick = id => {
    const {list, count, maxScore} = this.state
    const out = list.includes(id)
    if (out === true) {
      console.log('ohh no game over', count, '/', '12')

      if (maxScore < count) {
        this.setState(() => ({
          isLost: true,
          count,
          startGame: false,
        }))
      } else {
        this.setState(() => ({isLost: true, count, startGame: false}))
      }
    } else if (out === false && count < 12) {
      if (maxScore < count) {
        this.setState(p => ({
          count: count + 1,
          list: [...p.list, id],
        }))
      } else {
        this.setState(p => ({
          count: count + 1,
          list: [...p.list, id],
        }))
      }

      console.log('added extra one point', count)
    } else if (count === 12) {
      this.setState({isWon: true, maxScore: 12})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {isLost, isWon, count, maxScore, startGame} = this.state
    console.log('maxScore', maxScore)

    const lis = this.shuffledEmojisList()

    return (
      <div>
        <Navbar score={count} max={maxScore} isWon={isWon} />
        <ul className="ulElement">
          {(isWon === true || isLost === true || count === 12) &&
          startGame === false ? (
            <WinOrLostCard count={count} f={this.onPlayAgainButtonClick} />
          ) : (
            lis.map(a => (
              <EmojiCard val={a} fun={this.onCardClick} key={a.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
