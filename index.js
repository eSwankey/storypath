import { AppRegistry } from 'react-native';
import App from './App'; // Make sure this path points to your App.tsx file
import { name as appName } from './app.json'; // Import the app name

AppRegistry.registerComponent(appName, () => App);
