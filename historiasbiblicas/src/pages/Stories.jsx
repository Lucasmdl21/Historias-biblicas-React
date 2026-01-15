import "./Stories.css"

// dados
import historiasBiblicas from "../data/historias"

// componente
import Cardhistorias from "../components/Cardhistorias"

const Stories = () => {
  return (
    <div>
      <div className="containerTitles">
        <h1 className="storiesTitle">📚 Todas as Histórias Bíblicas</h1>
      </div>

      <div className="storiesGrid">
        {historiasBiblicas.map(story => (
          <Cardhistorias
            key={story.id}
            id={story.id}
            images={story.imagem}
            titulo={story.titulo}
            versiculoChave={story.versiculoChave}
            link={`/stories/${story.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Stories
