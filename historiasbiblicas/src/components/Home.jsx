import React from 'react'
import { Link } from "react-router-dom"

import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      
      {/* HERO */}
      <section className="hero">
        <h1>📖 Histórias Bíblicas</h1>
        <p>
          Conheça histórias cheias de fé, esperança e ensinamentos
          que atravessam gerações.
        </p>

        <Link to="/stories" className="btn">
          Começar a ler
        </Link>
      </section>

    </div>
  )
}

export default Home