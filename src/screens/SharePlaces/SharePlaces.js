import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	Button,
	Image
} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions/index';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlacesScreen extends Component {
	static navigatorStyle = {
		navBarButtonColor: "orange"
	}

	constructor(props) {
		super(props);

		this.state = {
			placeName: ""
		}

		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
	}

	onNavigatorEvent= event => {
		if(event.type === "NavBarButtonPress") {
			if(event.id === "sideDrawerToggle") {
				this.props.navigator.toggleDrawer({
					side: 'left'
				});
			}
		}
	}

	placeNameChangedHandler = val => {
		this.setState({
			placeName: val
		})
	}

	placeAddHandler = () => {
		if (this.state.placeName.trim() !== "") {
			this.props.onAddplace(this.state.placeName)
		}
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<MainText>
						<HeadingText>Share Place with Us !</HeadingText>
					</MainText>
					<PickImage/>
					<PickLocation/>
					<PlaceInput
						placeName={this.state.placeName}
						onChangeText={this.placeNameChangedHandler}
					/>
					<Button title="Share the place"
						onPress={this.placeAddHandler} />
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	placeholder: {
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#eee",
		width: "80%",
		height: 150
	},
	button: {
		margin: 8
	},
	previewImage: {
		width: "100%",
		height: '100%'
	}
})

const mapDispatchToProps = dispatch => {
	return {
		onAddplace: (placeName) => dispatch(addPlace(placeName))
	}
}

export default connect(null, mapDispatchToProps)(SharePlacesScreen);