import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container:{
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    text:{
        marginBottom: 20,
        marginTop:'20%'
    },
    footerCard:{
        width:'100%',
        marginTop:10, 
        flexDirection:'row'
    },
    containerTexto:{
        marginLeft:10
    },
    item: {
        padding: 10,
        marginVertical: 8,
        borderRadius: 5, 
        backgroundColor: 'white',
        marginHorizontal:15, 
        flexDirection:'column',
        height:180,
        borderRadius:5,
        justifyContent: 'flex-start',
        alignItems:'center',
        zIndex:5,
    },
    lista:{
        width:'100%',
        height:'100%',
    },
    image:{
        width:'100%',
        height:100,
        padding:0,
        borderRadius: 5,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    textoCard:{
        width:'auto',
        marginTop:20,
        marginLeft:20,
        color:'#fff',
        textAlign:'left',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius:5,
        padding: 2,
        paddingHorizontal:5
      
    },
    imagemUsuario:{
        width: 45,
        height:45,
        borderRadius: 5
    },
    up:{
        width: 45,
        height:45,
        backgroundColor:global.blue,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        zIndex:50,
    },
    botoes:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        zIndex:10
    },
    textoCategoria:{
        fontFamily:global.fontFamily,
        borderRadius:5,
        color:'#fff',
        position:'absolute',
        right:0,
        bottom:0,
        margin:4,
        padding:2,
        paddingHorizontal:8,
        fontSize:10,
    },
    quantidadeUpDown:{
        fontFamily:global.fontFamily,
        fontSize:10, 
        color:'#fff'
    }, 
    itemHeader:{
        width: Dimensions.get('screen').width / 3.1,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth: 2
    },
    containerFiltros:{
        width: '100%',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    }
  });

 export default styles;