import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, StatusBar, TouchableHighlight, ActivityIndicator } from "react-native";
import stylesDefault from '../../util/style';
import Header from '../../components/Header/header'
import Loading from '../../components/Loading/index'
import style from './style'
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useUserContext } from "../../contexts/UserContext";
import useNotificacao from './../../hooks/useNotificacao';
import { useNavigation } from '@react-navigation/core';
import ListVazia from './../../components/ListVazia/header';

export default function Notificacao( ) {

  const [notificationState, dispatch] = useNotificationContext();
  const [userState, dispatchUser] = useUserContext();
  const [loading, setLoading] = useState(true);
  const [getExpoToken, buscarNotificacoes, setListeners, visualizarTodas] = useNotificacao();
  const navigation = useNavigation();

  navigation.addListener("blur", async () => updateNotificacoes())
  
  const updateNotificacoes = async () => {
    await visualizarTodas(userState.id);
    await buscarNotificacoes(userState.id);
  }

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow,  ]}>
       <View style={[style.containerTexto]}>
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
        ListEmptyComponent={<ListVazia titulo="Nenhuma notificação encontrada"/>}
        refreshing={false}
        ListFooterComponent={() =>(
          loading ? 
            <ActivityIndicator size="large" color={global.red}></ActivityIndicator>
            : null
        )}
        ListFooterComponentStyle={{height:20, marginTop:10}}
      />
      </View>
    </SafeAreaView>
  );
}

