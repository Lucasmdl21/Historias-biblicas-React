import './Cardhistorias.css'
import { Link } from "react-router-dom"
const Cardhistorias = ({ images, titulo, versiculoChave, link  }) => {
    return (
    <div className="storyCard">
      <img
        src={images}
        alt={titulo}
        className="storyImage"
      />
      <h2>{titulo}</h2>
      <p>{versiculoChave}</p>
      <Link to={link} className='btn'>Historia</Link>
    </div>
  )
}

export default Cardhistorias