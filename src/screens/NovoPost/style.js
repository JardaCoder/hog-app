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
        marginTop:'10%',
        marginHorizontal:15,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    containerImagem:{
        width:'100%',
        height:250,
        borderRadius:5,
        backgroundColor:global.blue,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    circuloImagem:{
        width:100,
        height:100,
        marginTop:20,
        borderRadius:55,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',

    },
    adicionarImagem:{
        justifyContent: 'flex-start',
        alignItems:'center',
        borderRadius: 5,
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius: 5,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    apagarImagem:{
        width:40,
        height:40,
        borderRadius: 55,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center',
        margin:5,
        opacity:0.7
    },
    inputs:{
        width:'100%',
        height:'100%',
        marginTop:20,
    },
    conteudoHeader:{
        marginHorizontal:15, 
        height:'100%',
        maxHeight:90,
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

    navegarParaRank:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        marginTop: 10,
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