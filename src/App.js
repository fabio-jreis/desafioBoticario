import { Root } from 'native-base';
import React, {useEffect} from 'react';
import { LoadingModal } from './components';
import { palette } from './constants/Colors';
import { View, StatusBar } from 'react-native';
import GlobalState from './context/GlobalState';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

export default App = () => {

  useEffect(() => {
    SplashScreen.hide()
  });

  return(
    <View style={{flex:1}}>
      <Root>
        <StatusBar backgroundColor={palette.statusBar} hidden={false} barStyle='light-content' />
        <GlobalState>
          <LoadingModal />
          <AppNavigator />
        </GlobalState>
      </Root>
    </View>

  );

}