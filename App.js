import React from 'react';
import AppNavigator from './src/Navigation';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  
  render() {

    const AppContainer = createAppContainer(AppNavigator); 
 
    return ( 
        <AppContainer />  
    );
  }
}
