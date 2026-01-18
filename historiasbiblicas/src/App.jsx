// Importando o sistema de rotas do React Router
import { Routes, Route } from "react-router-dom"


// Importando hooks do React para gerenciar estado e efeitos colaterais
import { useState, useEffect } from "react"

// components
import Home from "./components/Home.jsx"

// pages
import Stories from "./pages/Stories.jsx"
import Story from "./pages/Story"
import HistoriasFavoritas from "./pages/hHstoriasFavoritas.jsx";



function App() {

  // Criando um state
      const [favorites, setFavorites] = useState(() => {
  // Tenta pegar os dados salvos no localStorage na chave "favorites"
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

// Função para adicionar ou remover um item dos favoritos
      const toggleFavorite = (id) => {
        setFavorites(prev =>
          prev.includes(id)
            ? prev.filter(favId => favId !== id)
            : [...prev, id]
        )
      }


useEffect(() => {

   // Sempre que 'favorites' mudar, salvamos o estado no localStorage
  // JSON.stringify transforma o array em uma string, porque localStorage só armazena strings
  localStorage.setItem("favorites", JSON.stringify(favorites))
}, [favorites])

  return (

      // <Routes> é o componente do React Router que gerencia as rotas do seu app
    <Routes>

      {/* Rota para a página inicial */}
      <Route path="/" element={<Home />} />

      {/* Rota para a página de histórias */}
      <Route
        path="/stories"
        element={<Stories favorites={favorites} toggleFavorite={toggleFavorite} />}
      />

    {/* Rota para uma história específica */}
    {/* ':id' é um parâmetro dinâmico, usado para identificar qual história mostrar */}
      <Route path="/stories/:id" element={<Story />} />

    {/* Rota para a página de histórias favoritas */}
    {/* Também passamos 'favorites' e 'toggleFavorite' para gerenciar os favoritos nessa página */}
      <Route
        path="/historiasFavoritas"
        element={<HistoriasFavoritas favorites={favorites} toggleFavorite={toggleFavorite} />}
      />
    </Routes>
  )
}

export default App
