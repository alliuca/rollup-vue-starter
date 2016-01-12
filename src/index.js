import { version } from '../package.json';
import App from './components/App/App.js';

const message = `current version is ${version}`;
export default () => console.log( message )