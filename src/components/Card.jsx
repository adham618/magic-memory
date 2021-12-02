import './Card.css'

const Card = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" draggable="false" />
        <img className="back" src="/img/cover.png" alt="cover" draggable="false" />
      </div>
    </div>
  )
}

export default Card
