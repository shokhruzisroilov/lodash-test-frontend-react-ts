import throttle from 'lodash/throttle'
import { useEffect } from 'react'

function Scroll() {
	useEffect(() => {
		const onScroll = throttle((): void => {
			console.log('Scrolling...')
		}, 1000)

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
			onScroll.cancel()
		}
	}, [])

	return <div style={{ height: '200vh' }}>Scroll down</div>
}

export default Scroll
