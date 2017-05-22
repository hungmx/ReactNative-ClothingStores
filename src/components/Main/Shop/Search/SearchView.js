import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SearchView extends Component {
    gotoProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ea5f34' }}>
                <Text>Components Search</Text>
                <TouchableOpacity onPress={() => { this.gotoProductDetail(); }}>
                    <Text>Go to Detail </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchView;
