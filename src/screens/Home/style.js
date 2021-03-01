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
        width: 85,
        height:95,
        borderRadius: 5
    },
    conteudoHeader:{
        marginHorizontal:15, 
        height:'100%',
        maxHeight:90,
        justifyContent:'space-between',
        flexDirection:'column',
    },
    navegarParaRank:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'flex-end',
        marginTop: 10,
        height:20
    },
    titulo:{
        marginTop:20,
        textAlign:'left',
        width:'100%'
    },
    scrollAtalhos:{
        width: '100%',
        flexDirection: 'row'
    }

  });

 export default styles;