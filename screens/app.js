import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import MainNavigator from './navigation';


export default class app extends Component {
   componentDidMount(){
      console.log('my app loaded')
   }
   render() {
      return (
         <MainNavigator />
      )
   }
}

