export default function CapsLock(props) {
  const textoInserido = props.texto
  const textoEmCapsLock = textoInserido.toUpperCase()

  const childrenInserido = props.children
  const childrenEmCapsLock = childrenInserido.toUpperCase()

  return (
    <div>
      <div>{textoEmCapsLock} - {childrenEmCapsLock}</div>
    </div>
  )
}
