import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }} >
                <Text>Product Detail</Text>
                <TouchableOpacity onPress={() => { this.goBack(); }}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ProductDetail;
