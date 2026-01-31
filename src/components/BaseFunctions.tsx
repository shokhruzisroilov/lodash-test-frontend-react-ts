function BaseFunctions() {
	// 1. _.chunk() - massivni bo'laklarga ajratish
	// const arr = [1, 2, 3, 4, 5]
	// console.log(_.chunk(arr, 2))
	// [[1, 2], [3, 4], [5]]

	// 2. _.compact() - yolg'on qiymatlarni olib tashlash
	// const arr = [0, 1, false, 2, '', 3]
	// console.log(_.compact(arr))
	// [1, 2, 3]

	// 3. _.find() - shartga mos elementni topish
	// const users = [
	// 	{ id: 1, name: 'Ali' },
	// 	{ id: 2, name: 'Vali' },
	// 	{ id: 3, name: 'Hasan' },
	// ]

	// console.log(_.find(users, { id: 2 }))
	// { id: 2, name: 'Vali' }

	// 4. _.get() - objectdan xavfsiz qiymat olish
	// const user = {
	// 	profile: {
	// 		name: 'Ali',
	// 		address: {
	// 			city: 'Tashkent',
	// 		},
	// 	},
	// }

	// console.log(_.get(user, 'profile.address.city')) // 'Tashkent'
	// console.log(_.get(user, 'profile.age', "Noma'lum")) // 'Noma\'lum'

	// 5. _.pick() - kerakli propertylarni tanlash
	// const user = {
	// 	name: 'Ali',
	// 	age: 25,
	// 	email: 'ali@example.com',
	// }

	// console.log(_.pick(user, ['name', 'email']))
	// // { name: 'Ali', email: 'ali@example.com' }

	// _.omit() - keraksiz propertylarni tashlash
	// console.log(_.omit(user, ['age']))
	// { name: 'Ali', email: 'ali@example.com' }

	return <div>BaseFunctions</div>
}

export default BaseFunctions
