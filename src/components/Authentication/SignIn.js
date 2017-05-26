import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import login from '../../api/login';
import global from '../../components/global';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    signIn() {
        const { email, password } = this.state;
        login(email, password)
            .then(res => {
                //truyen user va goback ve main
                global.onSignIn(res.user);
                this.onSuccess();
            })
            .catch(error => this.onFail());
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign in successfully',

            [   
                { text: 'OK', onPress: () => { this.props.goBackToMain(); } },
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Login Fail',
            [
                { text: 'OK' },
            ],
            { cancelable: false }
        );
    }

    render() {
        return (
            <View>
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
                <TouchableOpacity style={styles.signInNowStyle} onPress={() => { this.signIn(); }}>
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
