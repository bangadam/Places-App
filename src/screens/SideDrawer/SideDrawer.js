import React, {Component} from 'react';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
	render() {
		return(
			<View style={[styles.container,
				{width: Dimensions.get('window').width * 0.8}]}
			>
				<TouchableOpacity>
					<View style={styles.itemDrawer}>
						< Icon name = {
							Platform.OS === 'android'? "md-log-out" :
							"ios-log-out"
						}
						size = {
							30
						}
						color = "#aaa"
						style = {styles.itemDrawerIcon} />
						<Text>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		backgroundColor: 'white',
		flex: 1
	},
	itemDrawer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#eee'
	},
	itemDrawerIcon: {
		marginRight: 10
	}
})

export default SideDrawer;