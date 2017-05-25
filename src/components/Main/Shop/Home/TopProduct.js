import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, ListView } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const url = 'http://192.168.1.19/api/images/product/';
//Shift+Alt+Down	Copy Line Down
class TopProduct extends Component {
    gotoProductDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { topProduct } = this.props;
        console.log(topProduct);
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>

                <ListView
                    contentContainerStyle={styles.body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProduct)}
                    renderRow={(product) => (

                        <TouchableOpacity style={styles.productContainer} onPress={() => { this.gotoProductDetail(product); }} key={product.id}>
                            <Image source={{ uri: `${url}${product.images[0]}` }} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name.toUpperCase()}</Text>
                            <Text style={styles.productPrice}>{product.price}$</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

export default TopProduct;
const { width } = Dimensions.get('window');
// chia 2 do co 2 san pham 2 ben
const productImageWidth = (width - 60) / 2;
const productImageHeight = (productImageWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center'
    },
    title: {
        paddingLeft: 10,
        color: '#DBDBD8',
        fontSize: 20
    },
    body: {
        //xet thanh hang ngang
        flexDirection: 'row',
        //dan deu ra 2 ben
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 6

    },
    productContainer: {
        width: productImageWidth,
    },
    productImage: {
        width: productImageWidth,
        height: productImageHeight
    },
    productName: {
        color: '#DBDBD8',
        fontWeight: '500'
    },
    productPrice: {
        color: '#662F90',

    }

});


{/*<TouchableOpacity style={styles.productContainer} onPress={() => { this.gotoProductDetail(); }}>
                        <Image source={sp2} style={styles.productImage} />
                        <Text style={styles.productName}>PRODUCT NAME</Text>
                        <Text style={styles.productPrice}>$300</Text>
                    </TouchableOpacity>

                    <View style={{ height: 10, width }} />

                    <TouchableOpacity style={styles.productContainer} onPress={() => { this.gotoProductDetail(); }}>
                        <Image source={sp3} style={styles.productImage} />
                        <Text style={styles.productName}>PRODUCT NAME</Text>
                        <Text style={styles.productPrice}>$300</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={() => { this.gotoProductDetail(); }}>
                        <Image source={sp4} style={styles.productImage} />
                        <Text style={styles.productName}>PRODUCT NAME</Text>
                        <Text style={styles.productPrice}>$300</Text>
                    </TouchableOpacity>*/}