import "./Stories.css"
import { useState } from "react"
import { Link } from "react-router-dom"

// dados
import historiasBiblicas from "../data/historias"

// componente
import Cardhistorias from "../components/Cardhistorias"

const Stories = ({ favorites, toggleFavorite }) => {
  const [search, setSearch] = useState("")

  const historiasFiltradas = historiasBiblicas.filter(story =>
    story.titulo.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="containerTitles">
        <h1 className="storiesTitle">📚 Todas as Histórias Bíblicas</h1>
      </div>

      <div className="inputContent">
        {/* input de pesquisar */}
        <input
          type="text"
          className="inputSeach"
          placeholder="Pesquisar história..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/historiasFavoritas" className="btnFavoritos">
          ⭐ Ver Favoritos
        </Link>
      </div>

      <div className="storiesGrid">
        {historiasFiltradas.map(story => (
          <Cardhistorias
            key={story.id}
            images={story.imagem}
            titulo={story.titulo}
            versiculoChave={story.versiculoChave}
            link={`/stories/${story.id}`}
            isFavorite={favorites.includes(story.id)}
            onToggleFavorite={() => toggleFavorite(story.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Stories
