import styles from './style';
import React, { Component } from 'react';
import ScalableText from 'react-native-text';
import { View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomSidebarMenu extends Component {

    constructor(props) {
        super(props);

        this.items = [{
            navOptionsThumb: '',
            navOptionsName: 'TIMELINE',
            screenToNavigate: 'Home'
        },{
            navOptionsThumb: '',
            navOptionsName: 'NOVIDADES',
            screenToNavigate: 'News'
        }]
    }

    navegateRoutes = (item) => {
        this.props.navigation.navigate(item.screenToNavigate);
    }

    render() {

        return(
            <View style={styles.container}>
                <SafeAreaView>
                    {this.items.map((item, key) => {
                        return(
                            <View style={styles.itemMenu} key={key}>
                                <TouchableOpacity style={styles.labelContent} onPress={() => {
                                    global.currentScreenIndex = key;
                                    this.navegateRoutes(item);
                                }}>
                                    <ScalableText style={styles.labelItens} onPress={() => {
                                        global.currentScreenIndex = key;
                                        this.navegateRoutes(item);
                                    }}>
                                        {item.navOptionsName}
                                    </ScalableText>
                                    
                                </TouchableOpacity>
                            </View>
                        )
                    })}



                </SafeAreaView>
            </View>
        )

    }



}