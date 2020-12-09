import React from 'react';
import { Root } from 'native-base';
import { palette } from './constants/Colors';
import { View, StatusBar } from 'react-native';
import GlobalState from './context/GlobalState';
import { LoadingModal } from './components';
import AppNavigator from './navigation/AppNavigator';

export default App = () => {


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