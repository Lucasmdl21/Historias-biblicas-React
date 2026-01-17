import './Cardhistorias.css'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


const Cardhistorias = ({ images, titulo, versiculoChave, link, isFavorite, onToggleFavorite }) => {
  
  // cores aleatórias para a estrela de favorito
  const colors = ["#FF69B4", "#00C9A7", "#6A5ACD", "#FF8C00", "#00BFFF"]
  const [starColor, setStarColor] = useState("#000")

  useEffect(() => {
    if (isFavorite) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      setStarColor(randomColor)
    }
  }, [isFavorite])

  return (
    <div className="storyCard">
      <button
        className="favoriteBtn"
        onClick={onToggleFavorite}
        title="Adicionar aos favoritos"
        style={{ color: isFavorite ? starColor : "#000" }}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <img src={images} alt={titulo} className="storyImage" />
      <h2>{titulo}</h2>
      <p>{versiculoChave}</p>
      <Link to={link} className='btn'>História</Link>
    </div>
  )
}

export default Cardhistorias
