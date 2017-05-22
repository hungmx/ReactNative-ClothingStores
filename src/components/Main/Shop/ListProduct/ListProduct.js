import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>List Product</Text>
                <TouchableOpacity onPress={() => { this.goBack(); }}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.gotoDetail(); }}>
                    <Text>Go to detail </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ListProduct;
