import asyncStore from 'react-native-simple-store'

export const stages = {
	THURSDAY: ['JOYHAUSER INVITES'],
	FRIDAY: ['MATERIA', 'CDA', 'PANORAMA', 'CAMPING'],
	SATURDAY: ['CULTURE TEK', 'LABYRINTH', 'AFTR', 'CAMPING'],
}

export const checkIfFirstBoot = () => {
	asyncStore
		.get('firstBoot')
		.then(firstBoot => {
			console.log('Someone called me cc')
			return false // App already been booted before
		})
		.catch(error => {
			asyncStore.save('firstBoot', { firstBoot: true })
			console.log('Someone called me')
			return true // This is the first bootup
		})
}
