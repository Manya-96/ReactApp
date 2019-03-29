import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Modal, TouchableOpacity, Image } from 'react-native';
import { Header, Icon, Divider } from "react-native-elements";
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog-input';
import { Actions } from 'react-native-router-flux';


export default class homescreen extends React.Component {
  state = {
    dialogvisible: false,
  };

  _showDialog = () => {
    this.setState({ dialogvisible: true });
  };

  ok_Button = () => {

    Actions.Videoplay()

  };
  profileButtonTab = () => {
      Actions.Profile()
  };
  _hideDialog = () => { this.setState({ dialogvisible: false }); }

  render() {
    return (
      <View style={{flex:1}} >
        <Header
          containerStyle={{}}
          centerComponent={{ text: 'SETTINGS', style: { color: '#fff', fontWeight: 'bold' } }}
        />
        <Image
          style={{ height: 200, width: 200, alignSelf: 'center', top: 30 }}
          source={require('./assets/images/image2.png')}

        />
        <View style={styles.TextStyle}>
          <View style={styles.container}>
            <View style={{ alignItems: 'center', flexDirection: "row" }}>
              <Icon type='material'
                name="account-circle"
                size={20}
                containerStyle={{ marginStart: 15 }}
              />
              <Text style={styles.placeButton}> Name </Text>
            </View>
            <Text style={{ paddingRight: 15 }}> Manya Sharma </Text>
          </View>
          <Divider style={{ backgroundColor: 'black', height: 1, width: "90%", alignSelf: 'center' }} />
          <View style={styles.placeInput}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <Icon type="material"
                name="email"
                size={20}
                containerStyle={{ marginStart: 15 }}
              />
              <Text style={styles.placeButton}> Email </Text>
            </View>
            <Text style={{ paddingRight: 15 }}> xyz@gmail.com</Text>
          </View>
          <Divider style={{ backgroundColor: 'black', height: 1, width: "95%", alignSelf: 'center' }} />
          <TouchableOpacity onPress={this._showDialog}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 60 }} >
              <View style={{ flexDirection: 'row' }}>
                <Icon type="font-awesome"
                  name="lock"
                  size={20}
                  containerStyle={{ marginStart: 17, alignSelf: "center" }}
                />
                <Text style={{ paddingLeft: 12, fontSize: 20, fontWeight: 'bold' }}> Reset Password </Text>
              </View>
              <Text style={styles.placeButton}> ******* </Text>
            </View>
            <Divider style={{ backgroundColor: 'black', height: 1, width: "90%", alignSelf: 'center' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.ok_Button}>
            <View style={styles.placeInput}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="material"
                  name="new-releases"
                  size={20}
                  containerStyle={{ marginStart: 15, alignSelf: "center" }}
                />
                <Text style={styles.placeButton}> How To Use... </Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: 'black', height: 1, width: "90%", alignSelf: 'center' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.profileButtonTab}>
            <View style={styles.placeInput}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="material"
                  name="new-releases"
                  size={20}
                  containerStyle={{ marginStart: 15, alignSelf: "center" }}
                />
                <Text style={styles.placeButton}> Profile </Text>
              </View>
            </View>
            <Divider style={{ backgroundColor: 'black', height: 1, width: "90%", alignSelf: 'center' }} />
          </TouchableOpacity>

          <Dialog.Container visible={this.state.dialogvisible}>
            <Dialog.Title>CHANGE PASSWORD</Dialog.Title>
            <Dialog.Input wrapperStyle={styles.placeOutput} label="Current Password" />
            <Dialog.Input label="New Password" />
            <Dialog.Input label="Confirm Password" />
            <Dialog.Button bold={true} label="CANCEL" onPress={this._hideDialog} />
            <Dialog.Button bold={true} label="SUBMIT" onPress={this._hideDialog} />
          </Dialog.Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextStyle: {
    paddingTop: 40
  },
  placeInput: {
    height: 60,
    flexDirection: 'row',
    // backgroundColor: '#d1d1e0',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeButton: {
    fontSize: 20,
    paddingLeft: 8,
    fontWeight: 'bold'
  },
  instructions: {
    alignContent: 'center'
  },
  inputContainer: {
    height: 20
  }
}) 
