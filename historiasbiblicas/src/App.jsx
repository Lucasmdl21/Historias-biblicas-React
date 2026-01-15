// Rotas
import { Routes, Route } from "react-router-dom"

// components
import Home from "./components/Home.jsx"

// pages
import Stories from "./pages/Stories.jsx"
import Story from "./pages/Story"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
       <Route path="/stories/:id" element={<Story />} />
    </Routes>
  )
}

export default App
