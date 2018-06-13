import { Navigation } from "react-native-navigation";
import {Provider} from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaces from "./src/screens/SharePlaces/SharePlaces";
import FindPlaces from "./src/screens/FindPlaces/FindPlaces";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlacesScreen", () => SharePlaces, store, Provider);
Navigation.registerComponent("awesome-places.FindPlacesScreen", () => FindPlaces, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetail, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawer, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Awesome Places"
  },
});