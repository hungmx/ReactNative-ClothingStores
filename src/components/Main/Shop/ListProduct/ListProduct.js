import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ListView, RefreshControl } from 'react-native';

import icBack from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
import getListProduct from '../../../../api/getListProduct';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const url = 'http://192.168.1.19/api/images/product/';
class ListProduct extends Component {

    constructor(props) {
        super(props);
        const list = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: list,
            refreshing: false,
            page: 1
        };

        this.arr = [];
    }
    componentDidMount() {
        const cartType = this.props.category.id;
        getListProduct(cartType, 1)
            .then(arrProduct => {
                this.arr = arrProduct;
                this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
            })
            .catch(err => console.log(err));
    }
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }

    render() {
        const { category } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.goBack(); }}>
                            <Image source={icBack} style={styles.icBack} />
                        </TouchableOpacity>

                        <Text style={styles.titleStyle}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView
                        removeClippedSubviews={false}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={styles.content}>
                                <Image source={{ uri: `${url}${product.images[0]}` }} style={styles.productImage} />
                                <View style={styles.productInfo}>
                                    <Text style={styles.text1}>{toTitleCase(product.name)}</Text>
                                    <Text style={styles.text2}>{product.price}$</Text>
                                    <Text style={styles.text3}>Material {product.material}</Text>
                                    <View style={styles.lastRowInfo}>
                                        <Text style={styles.text4}>Color {product.color}</Text>
                                        <View style={{
                                            backgroundColor: product.color.toLowerCase(),
                                            height: 15,
                                            width: 15,
                                            borderRadius: 8
                                        }} />
                                        <TouchableOpacity>
                                            <Text style={styles.text5}>SHOW DETAIL</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        )}

                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.props.category.id;
                                    getListProduct(idType, newPage)
                                        .then(arrProduct => {
                                            this.arr = arrProduct.concat(this.arr);
                                            console.log(arrProduct);
                                            this.setState({
                                                listProducts: this.state.listProducts.cloneWithRows(this.arr),
                                                refreshing: false
                                            });
                                        })
                                        .catch(err => console.log(err));
                                    {/*setTimeout(() => this.setState({ refreshing: false }), 3000);*/ }
                                }}
                            />
                        }
                    />
                </View>
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

{/*<ScrollView style={styles.wrapper}>
                   
                </ScrollView>*/}
{/*<View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.goBack(); }}>
                            <Image source={icBack} style={styles.icBack} />
                        </TouchableOpacity>

                        <Text style={styles.titleStyle}>{category.name}</Text>
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
                    </View>*/}