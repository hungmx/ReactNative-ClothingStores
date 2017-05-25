import { AsyncStorage } from 'react-native';
const saveCart = async (cartArray) => {
    //setItem chỉ lưu được giá trị dạng chuỗi
    await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
};
export default saveCart;
