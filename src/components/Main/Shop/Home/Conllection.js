import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');
class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>SPRING Collection</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image source={bannerImage} style={styles.imageStyles} />
                </View>
            </View>
        );
    }
}

export default Collection;
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
        width: imageWith
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    }

});
