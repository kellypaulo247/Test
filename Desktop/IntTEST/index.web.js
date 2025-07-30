

import { AppRegistry } from 'react-native';
import Navbar from './src/components/challenges/nav'; 
import { name as appName } from './app.json';
import { createRoot } from 'react-dom/client';

AppRegistry.registerComponent(appName, () => Navbar);

// Run the app
const rootTag = document.getElementById('root');
AppRegistry.runApplication(appName, {
  rootTag,
});