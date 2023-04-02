// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {val, fun} = props

  const {emojiUrl, id, emojiName} = val

  const onClickCard = () => {
    fun(id)
  }

  return (
    <li className="l">
      <button type="button" onClick={onClickCard} className="emoji-card">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
