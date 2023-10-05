import CapsLockAlias from '../components/capslock'

import Link from 'next/link'

function Tempo(props) {
	const dynamicDate = new Date()
	const dynamicDateString = dynamicDate.toGMTString()

	console.log('Passando pelo front end')

	return (
		<div>
			<CapsLockAlias texto="Me deixe em Caps Lock por favor">Eu sou o conteúdo!</CapsLockAlias>
			<br />
			<div>{dynamicDateString} (dinâmico)</div>
			<div>{props.staticDateString} (estático com delay)</div>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</div>
	)
}

export async function getStaticProps() {
	console.log('Passando pelo getStaticProps')
	console.log('Adicionando delay de 5 segundos')

	await delay(5000)
	const staticDate = new Date()
	const staticDateString = staticDate.toGMTString()

	// Esse props que essa função retorna é o props lá de cima.
	return {
		props: {
			staticDateString
		}
		// Acrescenta o revalidate de 10 segundos
		, revalidate: 10
	}
}

// Simula um delay ruim na hora do build
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default Tempo
