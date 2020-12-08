import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import styles from './Loader.style';

export default Loader = (props) => {
    return (
        <View style={styles.spinnerWrapper}>
            <Spinner/> 
        </View>
      );
}
