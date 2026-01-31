import cloneDeep from 'lodash/cloneDeep'

interface User {
	name: string
	age: number
}

const user: User = {
	name: 'Ali',
	age: 20,
}

function CloneDeep() {
	const copy = cloneDeep(user)
	return <div>{copy.name}</div>
}

export default CloneDeep
