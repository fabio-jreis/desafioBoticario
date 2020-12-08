import React, { useContext } from 'react';
import { Modal } from 'react-native';
import appContext from '../../context/app-context';
import { Loader } from '..';

export default LoadingModal = () => {
    const context = useContext(appContext);
    
    return (
        <Modal
            animationType="fade"
            presentationStyle="overFullScreen"
            transparent={true}
            visible={context.isLoading}>
            <Loader/>
          </Modal>
      );
}
