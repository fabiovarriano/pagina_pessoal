import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <nav class="navbar">
          <a href = "home">  Início  </a>
          <a href = "about">  Sobre  </a>
          <a href = "content">   Conteúdos  </a>
          <a href = "project">   Projetos  </a>
          <a href = "contact">   Contatos  </a>
        </nav>
      </div>
      <div>
        <div>
          <header class="logo">
            <h1>Olá,</h1>
          </header>
          <n>
            Este é meu espaço para praticar e compartilhar o que estou sempre aprendendo.
          </n>
        </div>
      </div>
      
      
      
    </div>






  )
}

export default App
