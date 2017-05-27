import { AsyncStorage } from 'react-native';
const saveToken = async (token) => {
    //setItem chỉ lưu được giá trị dạng chuỗi
    await AsyncStorage.setItem('@token', token);
};
export default saveToken;
