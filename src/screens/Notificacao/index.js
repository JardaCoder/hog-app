import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import Header from '../../components/Header/header'
import Loading from '../../components/Loading/index'
import style from './style'

export default function Notificacao(props) {

  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(true);

  const navegarPara = (notificacao) =>{
    //TODO
  }

  const buscarNotificacoes = async () =>{
    //TODO
  }



  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const DATA = [
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },
    {
      titulo:"Sua publicação teve 50 ups!",
      mensagem:"Jardel e mais 49 pessoas curtiram sua publicação"
    },

    
  ];

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow, style]}>
       <View style={style.containerTexto}>
          <Text style={stylesDefault.textoPadraoBold}>{item.titulo}</Text>
          <Text style={stylesDefault.textoPadrao}>{item.mensagem}</Text>
       </View>
      
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() =>console.log('oi')}
      />
    );
  };

  return (
    loading ? <Loading/> :
    <SafeAreaView style={[stylesDefault.container]}>
       <Header titulo={"Notificações"}/>
      <View style={style.container}>
      <FlatList
        style={style.lista}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        
      />
      </View>
    </SafeAreaView>
  );
}

