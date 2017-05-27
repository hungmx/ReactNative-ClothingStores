import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import litteIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const { height, width } = Dimensions.get('window');
const url = 'http://192.168.1.19/api/images/type/';
class Category extends Component {

    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { types } = this.props;
        const swiper = (
            <Swiper width={imageWith} height={imageHeight} >
                {types.map(e => (
                    <TouchableOpacity onPress={() => { this.gotoListProduct(); }} key={e.id}>
                        <Image source={{ uri: `${url}${e.image}` }} style={styles.imageStyles} >
                            <Text style={styles.cateTitle}>{e.name}</Text>
                        </Image>
                    </TouchableOpacity>
                ))}

            </Swiper>
        );
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 4 }}>
                    {types.length ? swiper : null}
                </View>
            </View >
        );
    }
}

export default Category;
//933 x 465
const imageWith = width - 40; //(do trừ cách mỗi bên 20)
const imageHeight = (imageWith / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    imageStyles: {
        height: imageHeight,
        width: imageWith,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    cateTitle: {
        fontSize: 20,
        color: '#000'
    }
});
