import BaseFunctions from './components/BaseFunctions'
import CloneDeep from './components/CloneDeep'
import IsEmpty from './components/IsEmpty'
import Scroll from './components/Scroll'
import Search from './components/Search'

function App() {
	return (
		<div>
			<BaseFunctions />
			<Search />
			<Scroll />
			<CloneDeep />
			<IsEmpty />
		</div>
	)
}

export default App
