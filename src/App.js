import { Root } from 'native-base';
import { View, StatusBar } from 'react-native';
import React from 'react';
import { palette } from './constants/Colors';

export default App = () => {


  return(
    <View style={{flex:1}}>
      <Root>
        <StatusBar backgroundColor={palette.statusBar} />
      </Root>
    </View>

  );

}