// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, max, isWon} = props
  console.log(max)
  return (
    <div>
      <div className="header">
        <div className="java">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="java">
          {isWon === false ? <p>Score:{score}</p> : none}
          {isWon === false ? <p className="para">Top Score:{max}</p> : none}
        </div>
      </div>
    </div>
  )
}
export default NavBar
