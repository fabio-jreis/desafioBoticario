import { StyleSheet } from 'react-native';
import { palette } from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.background1
    },
    label: {
        color: 'white'
    },
    email: {
        width: 200,
        color: 'white',
        borderColor: 'white',
        borderBottomWidth: 1
    },
    password: {
        width: 200,
        marginTop: 15,
        color: 'white',
        borderColor: 'white',
        borderBottomWidth: 1
    },
    buttonEnter: {
        color: 'white',
        width: 200,
        marginTop: 30
    }
});