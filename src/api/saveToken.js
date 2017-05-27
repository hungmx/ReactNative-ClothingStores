import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
    //setItem chỉ lưu được giá trị dạng chuỗi
    try {
        await AsyncStorage.setItem('@token', token);
        return 'THANH_CONG';
    } catch (e) {
        return e;
    }
};
export default saveToken;
