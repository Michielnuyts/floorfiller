import React, { PropTypes, Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import TapMe from '~/components/TapMe'

export default class FloatingMenuButton extends Component {
	static propTypes = {}
	state = {}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Animatable.Image
						animation="pulse"
						duration={2500}
						iterationCount="infinite"
						style={{ width: 60, height: 60 }}
						source={require('../images/logo.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		color: 'red',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tapMe: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,0)',
	},
})
