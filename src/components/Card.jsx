import './Card.css'

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" draggable="false" />
        <img className="back"
          src="/img/cover.png"
          alt="cover"
          draggable="false"
          onClick={handleClick} />
      </div>
    </div>
  )
}

export default Card
