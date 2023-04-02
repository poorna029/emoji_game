// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {count, f, NewGame} = props
  console.log(NewGame)

  const onClickPlayAgain = () => {
    console.log('hi')
    f()
  }
  const result = count === 12 ? 'Won' : 'Lose'
  const image1 =
    count === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div>
      <div className="winOrLoseMain">
        <div>
          <h1>You {result}</h1>
          <p>Best Score</p>
          <p>{count}/12</p>
          <button onClick={onClickPlayAgain} type="button" className="bu">
            Play Again
          </button>
        </div>
        <img src={image1} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
