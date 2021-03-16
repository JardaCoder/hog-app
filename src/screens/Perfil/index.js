import React, {useEffect, useState,useCallback} from "react";
import { View, Text, Image, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style';
import Header from './../../components/Header/header';
import CardPosicao from './../../components/CardPosicao/index';
import CardInformativo from './../../components/CardInformativo/index';
import util from '../../util/util';
import { useNavigation } from "@react-navigation/core";
import useUsuario from './../../hooks/useUsuario';
import { useFocusEffect } from '@react-navigation/native';
import {MaterialIcons, FontAwesome5, Entypo  } from '@expo/vector-icons';
import vagas from '../../assets/vagas.png'
import techwiki from '../../assets/techwiki.png'
import meupost from '../../assets/meusposts.png'

export default function Perfil() {

  const [userState, dispatch] = useUserContext();
  const navigation = useNavigation();
  const [buscarOuCriarUsuario, salvarAlteracoesUsuario, buscarDadosHome] = useUsuario();
  const [ranking, setRanking] = useState([]);
  const [home, setHome] = useState({
    voce:{}
  })

  const buscarDados = async () => {
    let home = await buscarDadosHome(userState.id);
    setHome(home);
    setRanking(home.topUsuarios);
  }

  const navegarParaRank =  () =>{
    navigation.push('Ranking')
  }

  const rankingMap = () =>{
    return ranking.map((item, index) =>{
      return(
        <CardPosicao key={index} cor={global.blue} usuario={item} index={index} 
          texto={item.id == home.voce.id ? '(Você)' : ""}/>
      )
    })
  }


  useFocusEffect(useCallback(() => {
      buscarDados();
  },[]))

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Meu perfil"}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.header}>
            <Image style={style.image} source={{uri: userState.fotoUrl}}></Image>
            <Text style={stylesDefault.titulo}>{userState.nome}</Text>
          </View>
          <Text style={[stylesDefault.tituloMaior, style.titulo]}>Pontuação</Text>
          {home.voce &&(
              <CardPosicao cor={global.red} usuario={home.voce} posicao={home.voce.posicao} texto={'(Você)'}/>
          )}
          {
            rankingMap()
          }
          <View style={style.navegarParaRank}>
            <TouchableOpacity  onPress={() => navegarParaRank()}>
              <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
            </TouchableOpacity>  
          </View>
          
          <Text style={[stylesDefault.tituloMaior, style.titulo]}>Atalhos:</Text>
          <ScrollView horizontal={true} style={style.scrollAtalhos}>
            <CardInformativo icon={<Image source={meupost} style={stylesDefault.iconeCard} resizeMode="contain"/>}
              titulo="Minhas idéias" onPress={() => navigation.push('PostsUsuario', {})}/>
            <CardInformativo icon={<Image source={techwiki} style={stylesDefault.iconeCard} resizeMode="contain"/>} 
              titulo= "TechWiki" onPress={() => util.abrirLink("http://techwiki.souhibrido.com.br/")}/>
            <CardInformativo icon={<Image source={vagas} style={stylesDefault.iconeCard} resizeMode="contain"/>} 
              titulo= "Vagas" onPress={() => util.abrirLink("https://www.hibrido.com.br/vagas/")}/>
          </ScrollView>
          <View style={style.navegarParaRank}>
            <TouchableOpacity  onPress={() => navegarParaRank()}>
              <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
            </TouchableOpacity>  
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
