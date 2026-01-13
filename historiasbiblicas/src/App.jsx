import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Stories from "./components/Stories.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
    </Routes>
  )
}

export default App
