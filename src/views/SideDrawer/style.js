import { StyleSheet } from 'react-native';
import { palette } from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.background1
    },
    itemMenu: {
        width: 250,
        margin: global.height < 600 ? -5 :  (global.height > 800) ? 15 : 3,
        marginTop: global.height < 600 ? 5 : 15,
        flexDirection: 'row',
        alignItems: 'center',
    },   
    labelContent: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    labelItens: {
        color: palette.secondary,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 10
    }
});