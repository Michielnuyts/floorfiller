import React, { PropTypes, Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ShowDays from '~/components/ShowDays'
import ShowStages from '~/components/ShowStages'
import ArtistList from '~/containers/ArtistList'
import FloatingMenuButton from '~/components/FloatingMenuButton'
import { setInitialStateFromAsyncstorage } from '~/redux/modules/favorites'
import { platform, dimensions } from '~/styles'

class LineUp extends Component {
	static propTypes = {}
	state = {}
	componentWillMount() {
		this.props.dispatch(setInitialStateFromAsyncstorage())
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.showDays}>
					<FloatingMenuButton onPress={this.props.onPress} />
					<ShowDays />
				</View>
				<View style={styles.artistList}>
					<ArtistList />
				</View>
				<View style={styles.showStages}>
					<ShowStages />
				</View>
			</View>
		)
	}
}

export default connect()(LineUp)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: dimensions.marginTop[platform],
		width: dimensions.screenWidth,
		alignItems: 'center',
		backgroundColor: '#000',
	},
	showDays: {
		flex: 2,
		marginTop: 10,
		alignItems: 'center',
	},
	artistList: {
		flex: 8,
		justifyContent: 'center',
	},
	showStages: {
		flex: 0.6,
		justifyContent: 'flex-end',
		backgroundColor: '#00FFA8',
		borderTopWidth: 6,
		borderColor: '#000',
	},
})
