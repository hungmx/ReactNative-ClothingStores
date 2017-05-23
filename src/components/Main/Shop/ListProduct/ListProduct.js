import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import icBack from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.goBack(); }}>
                            <Image source={icBack} style={styles.icBack} />
                        </TouchableOpacity>

                        <Text style={styles.titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>

                    <View style={styles.content}>
                        <Image source={sp1} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.text1}>Lace Sleeve Si</Text>
                            <Text style={styles.text2}>117$</Text>
                            <Text style={styles.text3}>Material silk</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.text4}>Color Royal</Text>
                                <View style={styles.productColor} />
                                <TouchableOpacity>
                                    <Text style={styles.text5}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Image source={sp1} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.text1}>Lace Sleeve Si</Text>
                            <Text style={styles.text2}>117$</Text>
                            <Text style={styles.text3}>Material silk</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.text4}>Color Royal</Text>
                                <View style={styles.productColor} />
                                <TouchableOpacity>
                                    <Text style={styles.text5}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Image source={sp1} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.text1}>Lace Sleeve Si</Text>
                            <Text style={styles.text2}>117$</Text>
                            <Text style={styles.text3}>Material silk</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.text4}>Color Royal</Text>
                                <View style={styles.productColor} />
                                <TouchableOpacity>
                                    <Text style={styles.text5}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Image source={sp1} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <Text style={styles.text1}>Lace Sleeve Si</Text>
                            <Text style={styles.text2}>117$</Text>
                            <Text style={styles.text3}>Material silk</Text>
                            <View style={styles.lastRowInfo}>
                                <Text style={styles.text4}>Color Royal</Text>
                                <View style={styles.productColor} />
                                <TouchableOpacity>
                                    <Text style={styles.text5}>SHOW DETAIL</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ListProduct;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        padding: 10,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    wrapper: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    },
    icBack: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        color: '#000',
        fontSize: 20,
    },
    content: {
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,

    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361,
        marginRight: 10
    },
    productInfo: {
        justifyContent: 'space-between',
        flex: 1

    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productColor: {
        backgroundColor: 'cyan',
        height: 15,
        width: 15,
        borderRadius: 8
    },
    text1: {
        color: '#bcbcbc',
        fontSize: 20
    },
    text2: {
        color: '#B10D65'
    },
    text3: {
        color: '#000'
    },
    text4: {
        color: '#000'
    },
    text5: {
        fontSize: 10,
        color: '#B10D65'
    },
});
