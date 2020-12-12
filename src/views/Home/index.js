import React, { useState, useEffect } from 'react';
import styles from './style';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { palette } from '../../constants/Colors';
import Button from '../../components/Button/Button';
import iconProfile from '../../assets/images/icon-profile.png';
import { convertDate } from '../../helpers/generalHelper';
import UserAsyncStorage from '../../asyncStorage/UserAsyncStorage';

export default HomeView = (props) => {

   const [idEditPost, set_idEditPost] = useState(null);
   const [flagPost, set_flagPost] = useState(0);
   const [updateTimeline, set_updateTimeline] = useState(true) 
   const [text, set_text] = useState(null);
   const [name, set_name] = useState('');
 
    const [posts, set_posts] = useState([
           {
              "id": 6,
              "idUsuario": 5,
              "user":{
                 "name":"Mário",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T16:10:33Z",
              }
           },
           {
              "id": 5,
              "idUsuario": 5,
              "user":{
                 "name":"Mário",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T15:10:33Z",
              }
           },
           {
              "id": 4,
              "idUsuario": 4,
              "user":{
                 "name":"Roberto",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-02T16:00:00Z",
              }
           },
           {
              "id": 3,
              "idUsuario": 3,
              "user":{
                 "name":"Priscila",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-03T15:10:40Z",
              }
           },
           {
              "id": 2,
              "idUsuario": 2,
              "user":{
                 "name":"Júlia",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-04T18:10:23Z",
              }
           },
           {
              "id": 1,
              "idUsuario": 1,
              "user":{
                 "name":"José",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-05T16:10:00Z",
              }
           },
           {
              "id": 0,
              "idUsuario": 0,
              "user":{
                 "name":"Matheus",
                 "profile_picture": iconProfile
              },
              "message":{
                 "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                 "created_at":"2020-02-06T11:10:00Z",
              }
           }
        ]
     )
     
     useEffect( () => {

      getName();

     }, []);

     const getName = async () => {
         var objLogin = JSON.parse(await UserAsyncStorage.getLogin());
         set_name(objLogin.name);
     }
     
     const editarP = () => {

      var dateCreateded = new Date();

      var postObj = {
         "id": idEditPost,
         "idUsuario": 6,
         "user":{
            "name": name,
            "profile_picture": iconProfile
         },
         "message":{
            "content": text,
            "created_at": dateCreateded.toISOString()
         }
      };

      
       var auxPost = posts;
       console.log(auxPost);

       for (var i = 0; i < auxPost.length; i++) {
         var obj = auxPost[i];
         if(obj.id === idEditPost) {
            auxPost[i] = postObj;

            console.log('auxPost[i]: ', auxPost[i]);

            break;
         }         
       }

       set_posts(auxPost);
       set_flagPost(0);
       set_text('');
       console.log(auxPost);

       setTimeout(() => {
         set_updateTimeline(false);
      }, 100);

      setTimeout(() => {
         set_updateTimeline(true);
      }, 200);        


     }


     const TIMELINE = React.memo( ({item}) => {

      var datePost = convertDate(item.message.created_at, "ISO8601", "DD/MM/AAAA HH:MM");

      const deletePost = (id) => {

         var auxPost = posts; 

         for (var i = 0; i < auxPost.length; i++) {
            
            var obj = auxPost[i];

            if(obj.id === id) {
               auxPost.splice(i, 1);
            }
         }

         set_posts(auxPost);

         setTimeout(() => {
            set_updateTimeline(false);
         }, 100);

         setTimeout(() => {
            set_updateTimeline(true);
         }, 200);         
      }

      const editePost = (id) => {
         var message = posts[id].message.content;
         set_text(message);
         set_flagPost(1);
         set_idEditPost(id);
      }

      return(
          <View style={{paddingLeft: 30, marginRight: 30, marginBottom: 25}}>
              
              {item.idUsuario === 6 && 
               <TouchableOpacity onPress={() => {deletePost(item.id)}}>
                     <Text>APAGAR</Text>
               </TouchableOpacity>
              }
<View style={{flex: 1, flexDirection: 'row'}}>
   <TouchableOpacity onPress={() => {deletePost(item.id)}}>
         <Text>APAGAR</Text>
   </TouchableOpacity>    

   <TouchableOpacity style={{marginLeft: 10}} onPress={() => {editePost(item.id)}}>
         <Text>EDITAR</Text>
   </TouchableOpacity>  
</View>
              
              
              <View style={styles.card}>

                  <View style={{flex: 0.30, flexDirection: 'row'}}>
                     <Image
                        style={{width: 50, height: 50}}
                        source={item.user.profile_picture}
                     />   
                     <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{marginLeft: 10}}>{item.user.name}</Text> 
                        <Text style={{marginLeft: 10}}>Data postagem: { datePost }</Text>
                     </View>                 
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

         var dateCreateded = new Date();

         if(text !== null && text !== '') {

            var lastID = posts[0].id;

            var postObj = [{
               "id": lastID + 1,
               "idUsuario": 6,
               "user":{
                  "name": name,
                  "profile_picture": iconProfile
               },
               "message":{
                  "content": text,
                  "created_at": dateCreateded.toISOString()
               }
               
            }];

            

            var newObj = [...postObj, ...posts];
            set_posts(newObj);

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
                        value={text}
                  />
              </View>
                  
              <View style={{justifyContent: 'center', alignContent: 'center', marginTop: 25}}>
                     { flagPost === 0 && <Button title="Postar" onPress={ () => sendPost() }/> }
                     { flagPost === 1 && <Button title="Editar" onPress={ () => editarP() }/> }
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
                  {updateTimeline}
                  {renderTimeline()}
              </View>

           </View>
        </View>
    )

}