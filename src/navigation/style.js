import { StyleSheet, Platform } from 'react-native';
import { palette }  from '../constants/Colors'

export default StyleSheet.create({
    containerLogoSigeIos: {
        flex: 1, 
    },
    containerLogoSigeAndroid: {
        flex: 0.8, 
        marginLeft: 15,
    },
    containerPerfilIos: {
        flex: 0.2, 
        marginTop: 15,
        flexDirection: 'row'
    },
    containerPerfilAndroid: {
        flex: 0.4, 
        marginTop: 15,
        flexDirection: 'row'
    },
    LogoSige: {
        width: 71.5,
        height: 42.5,
        marginBottom: 15,
        marginLeft: 5,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    avatar: {
        width: 108,
        height: 108,
        borderRadius: 50
    },
    avatarPhoto: {
        width: 100,
        height: 100,
        borderRadius: 80,
        marginBottom: 15
    },    
    changeAvatar: {
        width: 40.5,
        height: 40.5
    },
    editAvatar: {
        width: 40.5,
        height: 40.5
    },
    iconPerfil: {
        width: 18.5,
        height: 18.5,
    },
    iconBell: {
        width: 18.5,
        height: 18.5,
    },    
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%'
    },
    textHeaderPreVenda: {
        color: palette.secondary,
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: 15,
        marginTop: 60,
        alignSelf: 'center'
    },
    textHeader: {
        color: palette.secondary,
        fontWeight: 'bold',
        position: 'absolute',
        fontSize: 15,
        //marginTop: 80,
        alignSelf: 'center'
    },    
    avatarContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : 50,
        marginLeft: Platform.OS === 'ios' ? 0 : 70,
        alignSelf: Platform.OS === 'ios' ? 'center' : 'flex-start'
    },
    textHeaderProfile: {
        color: palette.secondary,
        fontWeight: 'bold',
        fontSize: 12,
        alignSelf: 'center',
    },
    containerHeader: {
        flex: 1, 
        marginBottom: 10, 
        marginLeft: Platform.OS === 'ios' ? 0 : global.width > 400 ? 40 : 10,
        marginRight: Platform.OS === 'ios' ? 0 : global.width > 400 ? 70 : 50,
        marginTop: Platform.OS === 'ios' ? 0 : 5,
    },
    toolbar: {
        position: 'absolute',
        fontSize: 15,
        marginTop: 90,
        alignSelf: 'center'        
    },
    circleSerial: {
        width: 25,
        height: 25,
        marginRight: 14,
        marginLeft: 20,
        alignSelf: 'center'
    },
    circlePlanos: {
        width: 25,
        height: 25,
        marginRight: 14,
        //marginLeft: 20,
        alignSelf: 'center'
    },    
    line: {
        width: 25,
        marginRight: 14,
        alignSelf: 'center'
    },
    point: {
        width: 3.125,
        height: 3.125,
        marginRight: 14,
        alignSelf: 'center'        
    },
    pointPlanos: {
        width: 3.125,
        height: 3.125,
        marginRight: 14,
        marginLeft: 20,
        alignSelf: 'center'        
    },    
    textOff: {
        color: '#fff',
        marginRight: 10
    },
    textOn: {
        color: '#39aad9',
        marginRight: 10
    },
    flagNotification: {
        width: 5,
        height: 5,
        alignSelf: "flex-end",
        top: 0,
        position: "absolute"
    },    
});