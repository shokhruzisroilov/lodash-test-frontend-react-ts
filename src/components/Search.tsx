import debounce from 'lodash/debounce'
import { useCallback } from 'react'

function Search() {
	const handleSearch = useCallback(
		debounce(value => {
			console.log(value)
		}, 500),
		[],
	)

	return (
		<input
			onChange={e => handleSearch(e.target.value)}
			placeholder='Search...'
		/>
	)
}

export default Search
