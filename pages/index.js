import { useState } from 'react';

function Home() {
  return (
    <div className="container">
      <head>
        <meta charset="utf-8" />
        <title>My Title</title>
      </head>
      <body>
        <div>
          <h1>Home</h1>
          <Contador />
        </div>
      </body>
    </div>)
}

function Contador() {
  const [contador, setContador] = useState(1)

  function adicionarContador() {
    setContador(contador + 1)
  }

  return (
    <div>
      <div>{contador}</div>
      <buton onClick={adicionarContador}>Adicionar</buton>
    </div>
  )
}

export default Home
