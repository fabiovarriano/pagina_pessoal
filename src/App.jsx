import { useState } from 'react';
import './App.css';
import TypingAnimation from './TypingAnimation';



function App() {
  const [count, setCount] = useState(0)
  const texts = ["data analytics", "mercado Financeiro", "cooperativismo", "estratégias de crédito"];

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
        <div class = "home">
          <header class="logo">
            <h1>Olá</h1>
            <TypingAnimation texts={texts} speed={100} />
  
          </header>

          <div class = "imagem">
            <img src = "./src/imagem/logo.png" alt = "imagem"></img>
          </div>
        </div>

 
    
          
       

      </div>
      
      
      
    </div>






  )
}

export default App
