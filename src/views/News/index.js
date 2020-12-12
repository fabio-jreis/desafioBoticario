import styles from './style';
import appContext from '../../context/app-context';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import iconProfile from '../../assets/images/icon-boticario.png';

export default NewsView = (props) => {

   const context = useContext(appContext);

   const [items, set_items] = useState([]);

/*
   const [items, set_items] = useState([
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Além disso, nossos funcionários e familiares receberão kits de proteção. Afinal, o cuidado começa aqui dentro, né?",
            "created_at":"2020-02-02T16:10:33Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Com a união das demais marcas do grupo, doamos 216 toneladas de produtos de higiene para comunidades em vulnerabilidade social de diversas partes do país.",
            "created_at":"2020-02-02T15:10:33Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Tá sabendo da novidade? Tem lançamento de batons Make B. com ácido hialurônico e tá rolando amostra no app do Boti",
            "created_at":"2020-02-02T16:00:00Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Passe protetor solar e beba muuuita água. Essa dupla é essencial pra você conseguir aproveitar todos os dias de festa. Cuida desse corpo que você tanto ama!",
            "created_at":"2020-02-03T15:10:40Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Rainha que é Rainha também se preocupa com o reino animal. Tô muito orgulhosa e querendo que essa atitude vire moda! O Boti ama muito os bichinhos e não testa em animais há quase 20 anos.",
            "created_at":"2020-02-04T18:10:23Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"Produtos veganos também demonstram nosso amor pela natureza!  Sabia que são mais de 30% de produtos de make sem nenhuma matéria-prima de origem animal? Ah, e 40% da linha de Nativa SPA também é vegana. Pra saber se o produto é vegano, é só conferir na embalagem!",
            "created_at":"2020-02-05T16:10:00Z"
         }
      },
      {
         "user":{
            "name":"O Boticário",
            "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
         },
         "message":{
            "content":"É tanto produto em promoção que vc nem vai saber pra onde olhar.  Entra lá na nossa loja online e vem comemorar o Dia da #BotiLover com a gente.",
            "created_at":"2020-02-06T11:10:00Z"
         }
      }
   ]
 )
 */

 
 
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