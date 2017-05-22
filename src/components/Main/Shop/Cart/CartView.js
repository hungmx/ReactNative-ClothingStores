import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
    gotoProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#9fdcef' }}>
                <Text>Components Cart</Text>
                <TouchableOpacity onPress={() => { this.gotoProductDetail(); }}>
                    <Text>Go to Product Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CartView;
