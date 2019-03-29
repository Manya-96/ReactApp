import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { Input, Button, Divider, Image, colors, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { appReducer } from "./reducers";
import videoplay from './videoplay';
import homescreen from '../homescreen';

const Scenes = Actions.create(
    <Scene key='root' >
        <Scene key='HomeScreen'
            component={homescreen}
            animation='fade'
            hideNavBar= {true}
            initial={true}
        />
        <Scene key='Videoplay'
            component={videoplay}
            animation='fade'
            title='Video'
        />
        <Scene key='Profile'
            component={profile}
            animation='fade'
            title='Profile'
        />
    </Scene >

)

const ConnectReducer = connect()(Router)
const Store = createStore(appReducer)

export default class MainNavigator extends Component {
    render() {
        return (
            <Provider store={Store} >
                <ConnectReducer scenes={Scenes} />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
});