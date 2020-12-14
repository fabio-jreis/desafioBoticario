import { StyleSheet } from 'react-native';
import { palette } from '../../constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.background2
    },
    card: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: palette.secondary,

        //height: 100,

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,

        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,  
        elevation: 5           
    }
});