import styles from './style';
import appContext from '../../context/app-context';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import iconProfile from '../../assets/images/icon-boticario.png';

export default NewsView = (props) => {

   const context = useContext(appContext);
   const [items, set_items] = useState([]);
 
 useEffect(() => {

    loadAPI();
   }, []);
   
   const loadAPI = () => {

      context.showLoading(true);

      fetch('https://gb-mobile-app-teste.s3.amazonaws.com/data.json', {
        method: 'GET'})
        .then((response) => response.json())
        .then((responseJson) => {
          set_items(responseJson.news);
          context.showLoading(false);
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
          context.showLoading(false);
        });
   }


    const TIMELINE = React.memo( ({item}) => {

      const [image, set_image] = useState({uri: item.user.profile_picture});

      const loadFallBack = () => {
         set_image(iconProfile)
      }

        return(
            <View style={{paddingLeft: 30, marginRight: 30, marginBottom: 25, paddingTop: 15}}>

                <View style={styles.card}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={image}
                        onError={() => loadFallBack()}
                    />                    
                    <Text>{item.user.name}</Text>
                    <Text style={{marginTop: 10}}>{item.message.content}</Text>
                </View>

            </View>
        )
    }) 

    return(
        <View style={styles.container}>
            <View style={{flex: 1, width: '100%'}}>
                <FlatList
                    data={items}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem = { ({item, index}) => (
                        <TIMELINE item={item} />
                    )}
                
                />

                
            </View>
        </View>
    )

}