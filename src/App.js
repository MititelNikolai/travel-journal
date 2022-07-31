import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Data from './Data'
function App() {
	const data = Data.map(el => {
		return <Card key={el.id} {...el} />
	})
	return (
		<div>
			<Header />
			{data}
		</div>
	)
}

export default App
