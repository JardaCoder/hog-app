import React, {useEffect, useState} from "react";
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import Header from '../../components/Header/header'
import Loading from '../../components/Loading/index'
import style from './style'
import { useFocusEffect } from '@react-navigation/native';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/core';

export default function Notificacao(props) {

  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const navigation = useNavigation();

  const navegarPara = (notificacao) =>{
    //TODO
  }

  const buscarNotificacoes = async () =>{
    //TODO
  }

  const buscarUsuarios = async () =>{
    await api.post('/api/usuario/filtrar?sortField=pontosSplit&sortDirection=DESC', {}).then(result => {
      setUsuarios(result.data);
    });
  }



  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const Item = ({ item, onPress}) => (
    <TouchableOpacity disabled={true} onPress={onPress} style={[style.item, stylesDefault.boxShadow, style]}>
      <Image style={style.image} source={{uri: item?.fotoUrl}}/>
       <View style={style.containerTexto}>
          <Text style={stylesDefault.textoPadraoBold}>{item.nome} {item.id == userState.id ? '(Você)' : '' }</Text>
          <Text style={stylesDefault.textoPadrao}>{item.pontosSplit ? item.pontosSplit : '0'} pontos</Text>
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

  useEffect(() => {
    return navigation.addListener('focus', () => buscarUsuarios())
  }, [navigation])

  return (
    loading ? <Loading/> :
    <SafeAreaView style={[stylesDefault.container]}>
       <Header titulo={"Ranking"}/>
      <View style={style.container}>
      <FlatList
        style={style.lista}
        showsVerticalScrollIndicator={false}
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      
      />
      </View>
    </SafeAreaView>
  );
}

