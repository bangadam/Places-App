import {Navigation} from 'react-native-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import {Platform} from 'react-native';

const startTabs = () => {
	Promise.all([
		Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
		Icon.getImageSource(Platform.OS === 'android' ? "md-share" : "ios-share", 30),
		Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)
	]).then(sources => {
		Navigation.startTabBasedApp({
			tabs: [
				{
					screen: "awesome-places.FindPlacesScreen",
					label: "Find Place",
					title: "Find Place",
					icon: sources[0],
					navigatorButtons: {
						leftButtons: [{
							icon: sources[2],
							title: "Menu",
							id: "sideDrawerToggle"
						}]
					}
				},
				{
					screen: "awesome-places.SharePlacesScreen",
					label: "Share Place",
					title: "Share Place",
					icon: sources[1],
					navigatorButtons: {
						leftButtons: [{
							icon: sources[2],
							title: "Menu",
							id: "sideDrawerToggle"
						}]
					}
				}
			],
			appStyle: {
				tabBarSelectedButtonColor: "orange"
			},
			drawer: {
				left: {
					screen: "awesome-places.SideDrawerScreen",
				}
			}
		})
	})
}

export default startTabs;