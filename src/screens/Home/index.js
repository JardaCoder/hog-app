import React, {useEffect, useState, useCallback} from "react";
import { View, Text, Image, SafeAreaView, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from './../../util/style';
import style from './style';
import CardPosicao from '../../components/CardPosicao/index'
import CardInformativo from "../../components/CardInformativo";
import { useNavigation } from "@react-navigation/core";
import useUsuario from './../../hooks/useUsuario';
import { useFocusEffect } from '@react-navigation/native';
import {MaterialIcons, FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home() {

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
      <View style={style.container}>
        <View style={style.header}>
            <Image style={style.image} source={{uri: userState.fotoUrl}}></Image>
            <View style={style.conteudoHeader}>
              <Text style={stylesDefault.titulo}>Oi, {userState.nome}</Text>
              <Text style={stylesDefault.tituloMaior}>Tudo bem?</Text>

              <Text style={stylesDefault.textoPadrao}>Pontuação atual: {home.voce?.pontosSplit}</Text>
            </View>
        </View>
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
        <Text style={[stylesDefault.tituloMaior, style.titulo]}>Categorias:</Text>
        <ScrollView horizontal={true} style={style.scrollAtalhos}>
            <CardInformativo icon={<MaterialIcons name="message" size={40} color="#fff" />}  color={global.red} titulo="Recados"/>
            <CardInformativo icon={<MaterialIcons  name="dynamic-feed" size={40} color="#fff" />}  onPress={() => navigation.push('Post')} color={global.blue} titulo= "Projetos"/>
            <CardInformativo icon={<MaterialCommunityIcons name="hand-pointing-right" size={40} color="#fff" />} onPress={() => navigation.push('Post', {tipo:'indicacao'})} color={global.blue} titulo= "Indicações"/>
    
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
