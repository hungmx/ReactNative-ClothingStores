//imrc
import React, { Component } from 'react';
//imrn
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import profileIcon from '../../media/temp/profile.png';

//ccs
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.btStyle}>
                    <Text onPress={this.gotoAuthentication.bind(this)}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.styleName}>Mai Xuan Hung</Text>
                <View>
                    <TouchableOpacity style={styles.btSign} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btSign} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btSign} onPress={this.gotoAuthentication.bind(this)}>
                        <Text>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;
        return (
            <View style={styles.container}>
                <Image source={profileIcon} style={styles.imageStyle} />
                {mainJSX}
            </View>
        );
    }
}

export default Menu;
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#9fdcef', borderRightWidth: 2, borderColor: '#fff', alignItems: 'center' },
    imageStyle: { width: 100, height: 100, borderRadius: 50, marginBottom: 30, marginVertical: 30 },
    btStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btText: {
        color: '#9fdcef',
        fontSize: 20
    },
    btSign: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 70,
        marginBottom: 10,
        paddingLeft: 10
    },
    btTextSignin: {
        color: '#9fdcef',
        fontSize: 20,

    },
    styleName: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50
    }
});

{/*<Text>Components Menu</Text>
                <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
                    <Text> Go to Authen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
                    <Text> Go to Change_info</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
                    <Text> Go to OrderHistory</Text>
                </TouchableOpacity>*/}