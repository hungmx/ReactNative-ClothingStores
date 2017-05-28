import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';
import global from '../../global';
import searchProduct from '../../../api/searchProduct';

const { height } = Dimensions.get('window');

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textSearch: '' };
    }

    onSeach() {
        const { textSearch } = this.state;
        searchProduct(textSearch)
            .then(arrProduct => {
                global.setSearchArray(arrProduct);
                this.setState({ textSearch: '' });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1} >
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={styles.iconSyles} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={styles.iconSyles} />
                </View>
                <TextInput style={styles.input}
                    placeholder='What do you want to buy'
                    underlineColorAndroid='transparent'
                    value={this.state.textSearch}
                    onChangeText={text => this.setState({ textSearch: text })}
                    //bat su kien khi nhap xong nhan Enter
                    onSubmitEditing={() => { this.onSeach(); }}
                    //xu ly khi click nao se chuyen sang search
                    onFocus={() => global.gotoSearch()}
                />
            </View>
        );
    }
}

export default Header;
/*<TouchableOpacity onPress={this.props.onOpen}>
                       <Text>Open Menu</Text>
                   </TouchableOpacity>*/
const styles = StyleSheet.create({
    wrapper: { height: height / 8, backgroundColor: '#9fdcef', padding: 10, justifyContent: 'space-around' },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    input: { height: height / 23, backgroundColor: '#FFF', paddingLeft: 10, paddingVertical: 0 },
    iconSyles: { width: 25, height: 25 },
    titleStyle: { color: '#FFF', fontSize: 18 }
});
