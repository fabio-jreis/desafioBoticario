import styles from './style';
import { palette }  from '../constants/Colors';
import { HomeView, LoginView, NewsView } from '../views';
import AuthLoadingScreen from './AuthLoadingScreen';
import React, { useEffect, Component } from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Image, TouchableOpacity, Platform, Dimensions, View, Text, ImageBackground } from 'react-native';
import CustomSidebarMenu from '../views/SideDrawer';

import iconMenu from '../assets/images/icon-menu.png';

global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity hitSlop={{top: 30, bottom: 30, left: 30, right: 30}} onPress={this.toggleDrawer.bind(this)}>
            {}
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

class HeaderHome extends Component {
  render() {
      return (
        <View style={styles.containerHeader}>           
            <Text style={styles.textHeader} >TIMELIME</Text>
        </View>
      );
  }
}

class HeaderNews extends Component {
  render() {
      return (
        <View style={styles.containerHeader}>           
            <Text style={styles.textHeader} >NOVIDADES BOTICARIO</Text>
        </View>
      );
  }
}


const Home_StackNavigator = createStackNavigator({
    Home: {
      screen: HomeView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerTitle: <HeaderHome navigationProps={navigation} />,
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
    News: {
      screen: NewsView,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerTitle: <HeaderNews navigationProps={navigation} />,
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
      contentComponent: CustomSidebarMenu,

      //Sidebar width
      drawerWidth: Dimensions.get('window').width - 130,
    }
);

const AuthStack = createStackNavigator({
    login: LoginView
},{
    headerMode: 'none'
});


const RegisterStack = createStackNavigator({
  cadastro: newUserView
},{
  headerMode: 'none'
});

const AppNavigator = createSwitchNavigator({
    AuthLoader: AuthLoadingScreen,
    Main: BtAppStack,
    Auth: AuthStack,
    Register: RegisterStack
},{

});

export default (AppContainer = createAppContainer(AppNavigator));