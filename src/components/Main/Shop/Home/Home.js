import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

//trang home
class Home extends Component {

    render() {
        const { types } = this.props;
        return (
            <NavigationExperimental.Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} types={types} />;
                        case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }
                }
            />
        );
    }
}

export default Home;
