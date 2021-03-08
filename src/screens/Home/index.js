import React, { useState, useCallback } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from './../../util/style';
import style from './style';
import CardPosicao from '../../components/CardPosicao/index'
import CardInformativo from "../../components/CardInformativo";
import { useNavigation } from "@react-navigation/core";
import useUsuario from './../../hooks/useUsuario';
import { useFocusEffect } from '@react-navigation/native';


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
              <Text style={stylesDefault.textoPadrao}>Pontuação atual: {home.voce.pontosSplit}</Text>
            </View>
        </View>
          {/* {home.voce &&(
              <CardPosicao cor={global.red} usuario={home.voce} posicao={home.voce.posicao} texto={'(Você)'}/>
          )}
          {
            ranking.map((item, index) =>{
              return(
                <CardPosicao key={index} cor={global.blue} usuario={item} index={index} 
                  texto={item.id == home.voce.id ? '(Você)' : ""}/>
              )
            })
          }   */}
        <View style={style.navegarParaRank}>
          <TouchableOpacity  onPress={() => navegarParaRank()}>
            <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
          </TouchableOpacity>  
        </View>
        <Text style={[stylesDefault.tituloMaior, style.titulo]}>Categorias:</Text>
        <ScrollView horizontal={true} style={style.scrollAtalhos}>
            <CardInformativo color={global.red} titulo="Recados"/>
            <CardInformativo color={global.blue} titulo= "Projetos"/>
            <CardInformativo color={global.blue} titulo= "Indicações"/>
            <CardInformativo color={global.blue} titulo= "Vagas"/>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
