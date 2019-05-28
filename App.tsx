import React, {Component} from 'react';
import AppNavigation from './src/Navigation';
import { Provider } from 'react-redux';
import Store from './src/Store';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigation />
      </Provider>
    );
  }
}
