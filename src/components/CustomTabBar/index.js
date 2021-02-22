import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesome5, Ionicons, MaterialIcons   } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useUserContext } from '../../contexts/UserContext';



{/* <Ionicons name="home-outline" size={24} color="white" />
<MaterialIcons name="dynamic-feed" size={24} color="white" />
 <Ionicons name="add-outline" size={24} color="white" />
 <Ionicons name="notifications-outline" size={24} color="white" />
 <FontAwesome5 name="user" size={24} color="white" /> */}



const style = StyleSheet.create({

    tabArea:{
        height:60,
        width: '100%',
        backgroundColor:global.blue,
        flexDirection:'row'
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width / 5,
        
    }, 

    tabItemCenter:{
        width:85,
        height: 85,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: global.red,
        borderRadius: 55,
        marginTop: -25,
        borderWidth:12,
        borderColor:global.white,
        
    }, 

    label:{
        fontFamily:global.fontFamily,
        fontSize:8,
        marginTop: 2,
        color:'white'
    },

    badge:{
        width:15,
        height:15,
        color:'white',
        backgroundColor: global.red,
        position: 'absolute',
        borderRadius: 55,
        justifyContent:'center',
        alignItems:'center',
        zIndex:5

    },
    image:{
        width:24,
        height:24,
        borderRadius: 55
    }


  });


export default function CustomTabBar({state}){

    const navigation = useNavigation();
    const [itemWidth, setstate] = useState(0)
    const [userState, dispatch] = useUserContext();

    const navigateTo = (screen) =>{
        navigation.navigate(screen);
    }
    
    const onLayout = (event ) =>{
        var {x, y, width, height} = event.nativeEvent.layout;
        setstate(width)
    }

    return(
        <View style={style.tabArea}>
            <TouchableOpacity style={[style.tabItem]} onPress={() => navigateTo('Home')}>
                <Ionicons style={{opacity: state.index == 0 ? 1 : 0.7}} name="home-outline" size={24} color="white" />
                {state.index == 0 &&(
                     <Text style={style.label}>Home</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigateTo('Post')}>
                <MaterialIcons style={{opacity: state.index == 1 ? 1 : 0.7}} name="dynamic-feed" size={24} color="white" />
                {state.index == 1 &&(
                     <Text style={style.label}>Posts</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity style={[style.tabItemCenter]} onPress={() =>navigateTo('NovoPost')}>
                <Ionicons style={{opacity: state.index == 2 ? 1 : 0.7}} name="add-outline" size={40} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onLayout={(event) => {onLayout(event)}} style={[style.tabItem]} onPress={() =>navigateTo('Notificacao')}>
                <View style={[style.badge,
                     {right: itemWidth ? (itemWidth / 100) * 27 : 0, top: state.index == 3 ? 10 : 16 }]}>
                         <Text style={style.label}>0</Text>
                </View>
                <Ionicons style={{opacity: state.index == 3 ? 1 : 0.7}} name="notifications-outline" size={24} color="white" />
                {state.index == 3 &&(
                     <Text style={style.label}>Notificações</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() =>navigateTo('Perfil')}>
                {userState.photoUrl ? 
                    <Image style={style.image} source={{uri: userState.photoUrl}}></Image>
                :
                    <FontAwesome5 style={{opacity: state.index == 4 ? 1 : 0.7}} name="user" size={24} color="white" />
                }
                {state.index == 4 &&(
                     <Text style={style.label}>Perfil</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}