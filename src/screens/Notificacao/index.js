import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, StatusBar, TouchableHighlight, ActivityIndicator } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import Header from '../../components/Header/header'
import Loading from '../../components/Loading/index'
import style from './style'
import { useNotificationContext } from "../../contexts/NotificationContext";
import useNotificacao from './../../hooks/useNotificacao';

export default function Notificacao(props) {

  const [notificationState, dispatch] = useNotificationContext();
  const [loading, setLoading] = useState(true);
  const [getExpoToken, buscarNotificacoes] = useNotificacao();
  const [paginacao, setPaginacao] = useState({
    page: 0,
    loading: false
  })

  const navegarPara = (notificacao) =>{
    //TODO
  }

  const buscarDados = async () =>{
    await buscarNotificacoes(page)
  }



  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow, style]}>
       <View style={style.containerTexto}>
          <Text style={stylesDefault.textoPadraoBold}>{item.titulo}</Text>
          <Text style={stylesDefault.textoPadrao}>{item.corpo}</Text>
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
        data={notificationState.notificacoes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // onEndReached={() => alert('Oi')}
        // onEndReachedThreshold={0.1}
        onRefresh={buscarNotificacoes}
        refreshing={false}
        ListFooterComponent={() =>(
          paginacao.loading ? 
            <ActivityIndicator size="large" color={global.red}></ActivityIndicator>
            : null
        )}
        ListFooterComponentStyle={{height:20, marginTop:10}}
      />
      </View>
    </SafeAreaView>
  );
}

