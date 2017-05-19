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

export default class OrderHistory extends Component {
  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
        <Text>OrderHistory - Go back to MAIN </Text>
      </TouchableOpacity>
      </View>
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
