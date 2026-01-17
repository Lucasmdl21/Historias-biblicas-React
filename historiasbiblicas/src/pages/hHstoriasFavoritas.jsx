import Cardhistorias from "../components/Cardhistorias"
import historiasBiblicas from "../data/historias"
import { Link } from "react-router-dom"


const HistoriasFavoritas = ({ favorites, toggleFavorite }) => {
  const HistoriasFavoritas = historiasBiblicas.filter(story =>
    favorites.includes(story.id)
  )

  return (
    <div>
      <div className="containerTitles">
        <h1>⭐ Histórias Favoritas</h1>
      <Link to="/stories" className="btn storyBtn">
          Voltar
        </Link>
      </div>

      {HistoriasFavoritas.length === 0 ? (
        <p className="containerTitles">Você ainda não favoritou nenhuma história 😢</p>
      ) : (
        <div className="storiesGrid">
          {HistoriasFavoritas.map(story => (
            <Cardhistorias
              key={story.id}
              images={story.imagem}
              titulo={story.titulo}
              versiculoChave={story.versiculoChave}
              link={`/stories/${story.id}`}
              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(story.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoriasFavoritas
