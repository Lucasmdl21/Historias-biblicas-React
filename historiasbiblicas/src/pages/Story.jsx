// useParams: permite pegar parâmetros da URL (ex: /stories/:id)
// Link: permite criar links de navegação entre páginas sem recarregar o site
import { useParams, Link } from "react-router-dom"


// Importa os dados das histórias bíblicas
import historiasBiblicas from "../data/historias"

// css
import "./Story.css"

const Story = () => {

  // Pega o parâmetro 'id' da URL usando useParams
  const { id } = useParams()


  // Procura a história correta dentro do array de histórias
  // 'find' retorna o primeiro item que satisfaz a condição
  // Aqui, procuramos o objeto cuja propriedade 'id' seja igual ao id da URL
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
        
      {/* Título da história */}
        <h1 className="storiesTitle">{historia.titulo}</h1>

      </div>

      <div className="pageContent">

            {/* Texto da história */}
        <div className="storyText">
           {/* 'map' percorre cada parágrafo da história e cria um <p> para cada um */}
          {historia.texto.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>

        {/* Informações extras da história */}
        <div className="storyExtras">

          <p><strong>Versículo:</strong> {historia.versiculoChave}</p>
          <p><strong>Lições:</strong> {historia.licoes}</p>

        </div>

           {/* Link para voltar à lista de histórias */}
        <Link to="/stories" className="btn storyBtn">
          Ler outras histórias
        </Link>
      </div>
    </div>
  )
}

export default Story
