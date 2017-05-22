import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

class Cart extends Component {
    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW': return <CartView navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Cart;
