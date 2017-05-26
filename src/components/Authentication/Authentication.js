/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';


import SignIn from './SignIn';
import SignUp from './SignUp';

const { height, width } = Dimensions.get('window');

export default class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }


  setSignIn() {
    this.setState({ isLogin: true });
  }

  setSignUp() {
    this.setState({ isLogin: false });
  }

  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const checklogin = this.state.isLogin ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp onSignIn={this.setSignIn.bind(this)} />;

    return (
      <View style={styles.container}>
        <View style={styles.row1} >
          <TouchableOpacity onPress={() => { this.goBackToMain(); }}>
            <Image source={icBack} style={styles.iconSyles} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={styles.iconSyles} />
        </View>

        {checklogin}

        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.signInStyle} onPress={() => { this.setSignIn(); }} >
            <Text style={this.state.isLogin ? styles.activeStyle : styles.inActiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpStyle} onPress={() => { this.setSignUp(); }}>
            <Text style={!this.state.isLogin ? styles.activeStyle : styles.inActiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#539e2a',
    justifyContent: 'space-between',
    padding: 20
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  iconSyles: {
    width: 25,
    height: 25
  },
  titleStyle: {
    color: '#FFF',
    fontSize: 24
  },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  inActiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#539e2a'
  },
  signInStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1
  },

  textInputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
  },
  signInNowStyle: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSigninNow: {
    color: '#fff',
    fontWeight: '400'
  }

});
