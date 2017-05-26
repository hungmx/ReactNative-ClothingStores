import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

import register from '../../api/register';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    registerNew() {
        const { name, email, password } = this.state;
        register(email, name, password)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                this.onFail();
            });
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',

            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => { this.setState({ email: '' }); } },
            ],
            { cancelable: false }
        );
    }


    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter your name"
                    underlineColorAndroid='transparent'
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter your email"
                    underlineColorAndroid='transparent'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter your password"
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                ></TextInput>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Re-enter your password"
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    value={this.state.rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                ></TextInput>
                <TouchableOpacity style={styles.signInNowStyle} onPress={() => { this.registerNew(); }} >
                    <Text style={styles.textSigninNow}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

export default SignUp;

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
