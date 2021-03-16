import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: '20%',
        justifyContent:'center', 
        alignItems:'center',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    container:{
        marginHorizontal:15,
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    image:{
        width: 50,
        height:60,
        borderRadius: 5
    },
    containerTexto:{
        width:'100%',
        marginLeft:10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 5, 
        backgroundColor: 'white',
        marginHorizontal:10, 
        flexDirection:'row'
    },
    lista:{
        width:'100%',
        height:'100%'
    }
    

  });

 export default styles;