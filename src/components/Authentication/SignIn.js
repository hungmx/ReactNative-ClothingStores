import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class SignIn extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.textInputStyle} placeholder="Enter your email" underlineColorAndroid='transparent'></TextInput>
                <TextInput style={styles.textInputStyle} placeholder="Enter your password" underlineColorAndroid='transparent'></TextInput>
                <TouchableOpacity style={styles.signInNowStyle}>
                    <Text style={styles.textSigninNow}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#539e2a',
        justifyContent: 'space-between',
        padding: 20
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    iconSyles: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 24
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#539e2a'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },

    textInputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
    },
    signInNowStyle: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSigninNow: {
        color: '#fff',
        fontWeight: '400'
    }

});
