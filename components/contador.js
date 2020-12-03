import { useState } from 'react'

import buttonStyles from '../components/button1.module.css'
import CapsLock from '../components/capslock'

export default function Contador() {
  // React way to save state
  // Retorna duas coisas, o contador e a função que atualiza
  const [contador, setContador] = useState(7)

  function adicionarContador() {
    setContador(contador + 1)
  }

  function subtrairContador() {
    setContador(contador - 1)
  }

  return (
    <div>
      <CapsLock texto="Me deixe em Caps Lock por favor">Eu sou o conteúdo!</CapsLock>
      <div>{contador}</div>
      <button className={buttonStyles.button + ',' + buttonStyles.button1} onClick={adicionarContador}>Adicionar 1</button>
      <br />
      <button className={buttonStyles.button + ',' + buttonStyles.button2} onClick={subtrairContador}>Subtrair 1</button>
    </div>
  )
}
