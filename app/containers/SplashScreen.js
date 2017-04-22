import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FloatingMenuButton from '~/components/FloatingMenuButton'
import { platform, dimensions } from '~/styles'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux'
import { updateFirstBootState } from '../redux/modules/boot'

import SplashNews from '~/components/SplashNews'
import { checkIfFirstBoot } from '../config'

class SplashScreen extends Component {
	componentWillMount() {
		if (checkIfFirstBoot()) {
			this.props.dispatch(updateFirstBootState(true))
		} else {
			this.props.dispatch(updateFirstBootState(false))
		}
	}
	handleSplashTap = () => {
		Actions.Lineup({ type: 'reset' })
	}
	render() {
		console.log(this.props.firstBoot)
		return (
			<View style={styles.container}>
				<Animatable.View animation="bounceIn" style={styles.borderView}>
					<Animatable.View delay={800} animation="bounceIn" style={styles.news}>
						<SplashNews />
					</Animatable.View>
					<View style={styles.logoContainer}>
						<Animatable.View animation="bounceIn" delay={2000}>
							<FloatingMenuButton onPress={this.handleSplashTap} />
						</Animatable.View>
						<Animatable.Text
							delay={800}
							animation="flipInY"
							style={styles.text}>
							FloorFiller Festival
						</Animatable.Text>
						{this.props.firstBoot
							? <Text style={styles.text}>Yep</Text>
							: <Text style={styles.text}>Nope</Text>}
					</View>
				</Animatable.View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		firstBoot: state.boot.firstBoot,
	}
}

export default connect(mapStateToProps)(SplashScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: dimensions.marginTop[platform],
		alignItems: 'center',
		backgroundColor: '#000',
	},
	news: {
		flex: 1,
		marginTop: 10,
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)',
	},
	logoContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	borderView: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center',
		width: dimensions.screenWidth - dimensions.screenWidth / 90,
		borderWidth: 3,
		borderColor: '#00FFA8',
		borderRadius: 5,
		padding: 10,
		margin: 10,
	},
	text: {
		marginTop: 20,
		color: '#fff',
		fontWeight: '200',
		fontSize: 30,
	},
	textSmall: {
		color: '#fff',
		fontWeight: '100',
		fontSize: 13,
	},
})
