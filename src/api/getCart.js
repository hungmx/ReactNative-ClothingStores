import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const cartArray = await AsyncStorage.getItem('@cart');
        if (cartArray !== null) {
            console.log(cartArray);
            return JSON.parse(cartArray);
        }
        return [];
    } catch (error) {
        return [];
    }
};
export default getCart;
