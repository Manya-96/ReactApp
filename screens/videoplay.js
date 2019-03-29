import React from 'react';
import { StyleSheet, Text, View, WebView} from 'react-native';
// import { Header } from "react-native-elements";
import { Video} from 'expo';


export default class videoplay extends React.Component {

    componentWillMount(){
        console.log('inside did mount')
    }

    render() {
        return (
            <View style={styles.grid}>
                 <Video 
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    isLooping={false}
                    shouldPlay
                    style={{ width: 300, height: 300 }}
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        flex: 1
    }
})
