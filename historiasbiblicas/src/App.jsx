import { useState } from 'react'
import './App.css'

// componentes
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>ola</h1>
        <Home />
    </div>
  )
}

export default App
