/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Todo from './src/Todo';
import Todo2 from './src/Todo2';
import MakeTodo from './src/MakeTodo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MakeTodo);
