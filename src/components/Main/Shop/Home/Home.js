import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Collection from './Conllection';
import Category from './Category';
import TopProduct from './TopProduct';

//trang home
class Home extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
        );
    }
}

export default Home;
