import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Collection from './Conllection';
import Category from './Category';
import TopProduct from './TopProduct';

//trang home
class HomeView extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category navigator={this.props.navigator} />
                <TopProduct navigator={this.props.navigator} />
            </ScrollView>
        );
    }
}

export default HomeView;
