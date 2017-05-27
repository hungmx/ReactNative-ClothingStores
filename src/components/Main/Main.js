/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';
import global from '../global';

export default class Main extends Component {

  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      //check login thanh cong thi se xet lai ham onSignin
      .then(res => global.onSignIn(res.user))
      .catch(err => console.log(err));
  }
  gotoAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: 'AUTHENTICATION' });
  }
  gotoChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'CHANGE_INFO' });
  }
  gotoOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: 'ORDER_HISTORY' });
  }

  //drawer
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };


  render() {
    const { navigator } = this.props;
    return (
      //phan menu
      //truyen ham open sang Shop
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        //truyen navigator qua ben menu
        content={<Menu navigator={navigator} />}
        tapToClose
        openDrawerOffset={0.4} // 20% gap on the right side of drawer
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>

      /*<View style={styles.container}>
      <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
        <Text> Go to Authentication </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
        <Text> Go to ChangeInfo </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
        <Text> Go to OrderHistory </Text>
      </TouchableOpacity>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
