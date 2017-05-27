import { AsyncStorage } from 'react-native';

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token');
        if (token !== null) {
            console.log(token);
            return token;
        }
        return '';
    } catch (error) {
        return '';
    }
};
export default getToken;
