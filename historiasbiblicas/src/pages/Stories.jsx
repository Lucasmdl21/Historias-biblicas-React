import "./Stories.css"

// Importa o hook useState do React, usado para criar estados dentro do componente
import { useState } from "react"

// Importa o componente Link do React Router para criar links de navegação entre páginas
import { Link } from "react-router-dom"

// Importa os dados das histórias bíblicas
import historiasBiblicas from "../data/historias"

// Importa o componente Cardhistorias, que será usado para exibir cada história em formato de cartão
import Cardhistorias from "../components/Cardhistorias"


// Componente Stories, que recebe como props:
// - favorites: array com os ids das histórias favoritas
// - toggleFavorite: função para adicionar/remover favoritos
const Stories = ({ favorites, toggleFavorite }) => {

    // Estado para armazenar o valor do input de busca
  // Inicialmente é uma string vazia
  const [search, setSearch] = useState("")

   // Filtra as histórias com base no que o usuário digitou na busca
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
          value={search} // valor do input ligado ao estado 'search'
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
