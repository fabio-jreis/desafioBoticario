import styles from './style';
import { palette }  from '../constants/Colors';
import { HomeView, LoginView } from '../views';
import AuthLoadingScreen from './AuthLoadingScreen';
import React, { useEffect, Component } from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Image, TouchableOpacity, Platform, Dimensions, View, Text, ImageBackground } from 'react-native';

global.currentScreenIndex = 0;

//import { verifyNumberPush } from '../helpers/notificationHelper';
//import UserAsyncStorage from '../asynStorage/UserAsyncStorage';

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity hitSlop={{top: 30, bottom: 30, left: 30, right: 30}} onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Image 
                style={{
                    width: 15,
                    height: 12,
                    marginLeft: 30,
                    marginBottom: 6
                }}
                source={iconMenu} />
          </TouchableOpacity>
        </View>
      );
    }
}

class LogoSigeHeader extends Component {
  render() {
      return (
        <View style={styles.containerHeader}>
            <View style={ Platform.OS === 'ios' ? styles.containerLogoSigeIos : styles.containerLogoSigeAndroid }>
              <Image 
                  style={styles.LogoSige}
                  source={logoSige}/>  
            </View>
            
            <Text style={styles.textHeader} >HABILITAR `EQUIPAMENTO`</Text>
        </View>
      );
  }
}


//Stack Navigator for the First Option of Navigation Drawer
const Home_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    Home: {
      screen: HomeView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerTitle: <LogoSigeHeader navigationProps={navigation} />,
        headerTintColor: palette.secondary,
        header: (props) => (
          <Header {...props} />
        ),
        headerStyle: {
          backgroundColor: palette.header
        },
        headerForceInset: { bottom: 0 },
        headerBackTitle: null
      }),
    },
    Home: {
      screen: HomeView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerTitle: <LogoSigeHeader navigationProps={navigation} />,
        headerTintColor: palette.secondary,
        header: (props) => (
          <Header {...props} />
        ),
        headerStyle: {
          backgroundColor: palette.header
        },
        headerForceInset: { bottom: 0 },
        headerBackTitle: null
      }),
    },    
    
});

//Drawer Navigator Which will provide the structure of our App
const BtAppStack = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      home: {
        screen: Home_StackNavigator
      }
    },
    {
      //For the Custom sidebar menu we have to provide our CustomSidebarMenu
      //contentComponent: CustomSidebarMenu,

      //Sidebar width
      drawerWidth: Dimensions.get('window').width - 130,
    }
);

const AuthStack = createStackNavigator({
    login: LoginView
},{
    headerMode: 'none'
});

/*
const CadastroStack = createStackNavigator({
  cadastro: CadastroTecnicoView
},{
  headerMode: 'none'
});
*/

/*
const PreAppStack = createStackNavigator({
  pre: PreProfile
},{
  headerMode: 'none'
});
*/

const AppNavigator = createSwitchNavigator({
    AuthLoader: AuthLoadingScreen,
    Main: BtAppStack,
    Auth: AuthStack,
    //Pre: PreAppStack,
    //Cadastro: CadastroStack
},{

});

export default (AppContainer = createAppContainer(AppNavigator));