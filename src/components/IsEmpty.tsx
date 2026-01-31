import isEmpty from 'lodash/isEmpty'
import { useState } from 'react'

interface User {
	name: string
}

function IsEmpty() {
	const [data] = useState<User[]>([{ name: 'Ali' }, { name: 'Vali' }])

	return (
		<div>
			{isEmpty(data) ? (
				<p>Maʼlumot yoʻq</p>
			) : (
				<ul>
					{data.map((user, index) => (
						<li key={index}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default IsEmpty
