import React, { useState, useEffect } from 'react';
import styles from './style';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import { palette } from '../../constants/Colors';
import Button from '../../components/Button/Button';

export default HomeView = (props) => {

   const [updateTimeline, set_updateTimeline] = useState(true) 
   const [text, set_text] = useState(null);

   
    const [posts, set_posts] = useState([
           {
              "user":{
                 "name":"Mário",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T16:10:33Z"
              }
           },
           {
              "user":{
                 "name":"Amadeu",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T15:10:33Z"
              }
           },
           {
              "user":{
                 "name":"Roberto",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T16:00:00Z"
              }
           },
           {
              "user":{
                 "name":"Priscila",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-03T15:10:40Z"
              }
           },
           {
              "user":{
                 "name":"Júlia",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-04T18:10:23Z"
              }
           },
           {
              "user":{
                 "name":"José",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-05T16:10:00Z"
              }
           },
           {
              "user":{
                 "name":"Matheus",
                 "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-06T11:10:00Z"
              }
           }
        ]
     )

     
     useEffect( () => {

      //console.log('posts: ', posts);
      
      /*
      setTimeout(() => {
         set_updateTimeline(false);
      }, 100);

      setTimeout(() => {
         set_updateTimeline(true);
      }, 200);
      */

     }, [posts]);
     

     const TIMELINE = React.memo( ({item}) => {

      //console.log('ITEM: ', item);


      return(
          <View style={{paddingLeft: 30, marginRight: 30, marginBottom: 25}}>

              <View style={styles.card}>

                  <View style={{flex: 0.30, flexDirection: 'row'}}>
                     <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}
                     />                    
                     <Text style={{marginLeft: 10}}>{item.user.name}</Text>                     
                  </View>

                  <View style={{flex: 0.70, paddingTop: 30}}>
                     <Text>{item.message.content}</Text>
                  </View>

              </View>

          </View>
      )
  })      

     const renderTimeline = () => {
        return(
           <View style={{flex: 1}}>
                
              {posts && 
                <FlatList
                    data={posts}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem = { ({item, index}) => (
                        <TIMELINE item={item} />
                    )}                
                />              
              }  

           </View>
        )
     }

     const sendPost = () => {

         if(text !== null && text !== '') {
            var postObj = [{
               "user":{
                  "name":"Pegar o nome original",
                  "profile_picture":"https://pbs.twimg.com/profile_images/1240676323913347074/Gg09hEPx_400x400.jpg"
               },
               "message":{
                  "content": text,
                  "created_at":"2020-02-06T11:10:00Z"
               }
               
            }];

            //var newObj = [{...posts, ...postObj}];
            var newObj = [...postObj, ...posts];

            console.log('posts: ', posts);
            console.log('newObj: ', newObj);

            set_posts(newObj);
            //console.log('posts: ', posts);
         }

     }

     const renderPostTimeline = () => {
        return(
           <View style={{paddingLeft: 30, marginRight: 30}}>
              
              <View style={{marginTop: 30}}>
                 <Text>Digite algo para seus amigos:</Text>
                  <TextInput
                        multiline
                        maxLength={280}
                        style={{
                           backgroundColor: 'white',
                           marginTop: 10,
                           height: 100
                        }}
                        onChangeText={set_text}
                  />
              </View>
                  
              <View style={{justifyContent: 'center', alignContent: 'center', marginTop: 25}}>
                  <Button title="Postar" onPress={ () => sendPost() }/>
              </View>
              
           </View>
        )
     }


    return(
        <View style={styles.container}>
           <View style={{flex: 1}}>
              <View style={{flex: 0.4}}>
                  {renderPostTimeline()}
              </View>
              <View style={{flex: 0.6}}>
                  {updateTimeline && renderTimeline()}
              </View>

           </View>
        </View>
    )

}