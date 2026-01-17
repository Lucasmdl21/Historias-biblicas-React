import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
// components
import Home from "./components/Home.jsx"

// pages
import Stories from "./pages/Stories.jsx"
import Story from "./pages/Story"
import HistoriasFavoritas from "./pages/hHstoriasFavoritas.jsx";



function App() {
  
      const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })


      const toggleFavorite = (id) => {
        setFavorites(prev =>
          prev.includes(id)
            ? prev.filter(favId => favId !== id)
            : [...prev, id]
        )
      }
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites))
}, [favorites])

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/stories"
        element={<Stories favorites={favorites} toggleFavorite={toggleFavorite} />}
      />

      <Route path="/stories/:id" element={<Story />} />

      <Route
        path="/historiasFavoritas"
        element={<HistoriasFavoritas favorites={favorites} toggleFavorite={toggleFavorite} />}
      />
    </Routes>
  )
}

export default App
