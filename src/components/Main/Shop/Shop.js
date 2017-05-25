//imrc
import React, { Component } from 'react';
//imrn
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Header from './Header';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import icHome from '../../../media/appIcon/home0.png';
import icHomeS from '../../../media/appIcon/home.png';
import icCart from '../../../media/appIcon/cart0.png';
import icCartS from '../../../media/appIcon/cart.png';
import icSearch from '../../../media/appIcon/search0.png';
import icSearchS from '../../../media/appIcon/search.png';
import icContact from '../../../media/appIcon/contact0.png';
import icContactS from '../../../media/appIcon/contact.png';

import golobal from '../../../components/global';


//ccs
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProduct: [],
            cartArray: []
        };
        golobal.addProductToCart = this.addProductToCart.bind(this);
    }


    componentDidMount() {
        fetch('http://192.168.1.19/api')
            .then(res => res.json())
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProduct: product });
            });
    }

    addProductToCart(product) {
        this.setState({ cartArray: this.state.cartArray.concat({ product: product, quantify: 1 }) });
        console.log(this.state.cartArray);

    }

    openMenu() {
        //goi ham open o Main.js
        const open = this.props.open;
        open();
    }


    render() {
        //khai bao rut gon ten this.state...
        const { types, selectedTab, topProduct, cartArray } = this.state;

        return (
            //truyen ham openMenu sang
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={icHome} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icHomeS} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#9fdcef' }}

                    >
                        <Home types={types} topProduct={topProduct} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={icCart} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icCartS} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#9fdcef' }}
                        badgeText={cartArray.length}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={icSearch} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icSearchS} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#9fdcef' }}

                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={icContact} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={icContactS} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#9fdcef' }}

                    >
                        <Contact />
                    </TabNavigator.Item>




                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: { width: 20, height: 20 }
});
export default Shop;
