import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: '100%',
        maxHeight:110,
        justifyContent:'flex-start', 
        alignItems:'flex-start',
        flexDirection: 'row',
    },
    container:{
        marginTop:'15%',
        marginHorizontal:15,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    image:{
        width: 100,
        height:110,
        borderRadius: 5
    },
    conteudoHeader:{
        marginHorizontal:15, 
        height:'100%',
        justifyContent:'space-between',
        flexDirection:'column',
    },
    cardRanking:{
        width: '100%',
        height:60,
        marginTop:20,
        borderRadius: 5,
        backgroundColor:global.blue
    },
    containerButton:{
      height:'40%',
      width: '100%',
      backgroundColor:'white',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      alignItems: 'center',
  
    },
    text:{
      marginBottom: 20,
      marginTop:'20%'
    }

  });

 export default styles;