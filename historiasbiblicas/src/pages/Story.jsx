import { useParams, Link } from "react-router-dom"

// data
import historiasBiblicas from "../data/historias"

// css
import "./Story.css"

const Story = () => {
  const { id } = useParams()

  // procura a história correta
  const historia = historiasBiblicas.find(
    story => story.id === id
  )

  // se não encontrar
  if (!historia) {
    return <p>História não encontrada 😢</p>
  }

  return (
    <div className="storyPage">
      <div className="containerTitles">
        <h1 className="storiesTitle">{historia.titulo}</h1>
      </div>

      <div className="pageContent">
        <div className="storyText">
          {historia.texto.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>

        <div className="storyExtras">
          <p><strong>Versículo:</strong> {historia.versiculoChave}</p>
          <p><strong>Lições:</strong> {historia.licoes}</p>
        </div>

        <Link to="/stories" className="btn storyBtn">
          Ler outras histórias
        </Link>
      </div>
    </div>
  )
}

export default Story
