import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import Authentication from './Authentication/Authentication.js';
import ChangeInfo from './ChangeInfo/ChangeInfo.js';
import Main from './Main/Main.js';
import OrderHistory from './OrderHistory/OrderHistory.js';

export default class App extends React.Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ name: 'MAIN' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'MAIN': return <Main navigator={navigator} />;
            //lay user duoc truyen quan navigator = cach goi route.user
            case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} user={route.user} />;
            case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
            default: return <OrderHistory navigator={navigator} />;
          }
        }}

        configureScene={route => {
          if (route.name === 'AUTHENTICATION') {
            return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
          }
          return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
        }}

      />
    );
  }
}
