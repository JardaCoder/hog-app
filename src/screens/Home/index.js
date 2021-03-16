import React, {useEffect, useState, useCallback, useMemo} from "react";
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
import projetos from '../../assets/projetos.png'
import hibrido from '../../assets/hibriBranco.png'
import estrela from '../../assets/estrela.png'


export default function Home() {

  const [userState, dispatch] = useUserContext();
  const navigation = useNavigation();
  const [buscarOuCriarUsuario, salvarAlteracoesUsuario, buscarDadosHome] = useUsuario();
  const [ranking, setRanking] = useState([]);
  const [state, setState] = useState(0);
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

  const rankingMap = useMemo(() =>{
    return ranking.map((item, index) =>{
      return(
        <CardPosicao key={index} cor={global.blue} usuario={item} index={index} 
          texto={item.id == home.voce.id ? '(Você)' : ""}/>
      )
    })
  }, [ranking])


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
            rankingMap
          }  
        <View style={style.navegarParaRank}>
          <TouchableOpacity  onPress={() => navegarParaRank()}>
            <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
          </TouchableOpacity>  
        </View>
        <Text style={[stylesDefault.tituloMaior, style.titulo]}>Categorias:</Text>
        <ScrollView horizontal={true} style={style.scrollAtalhos}>
            <CardInformativo icon={<Image source={hibrido} style={stylesDefault.iconeCard} resizeMode="contain"/>} quantidadePost={home?.quantidadeRecados || '0'}
             onPress={() => navigation.push('Post', {tipo:'recado', pop:true})} color={global.red} titulo="Recados"/>
            <CardInformativo icon={<Image source={projetos} style={stylesDefault.iconeCard} resizeMode="contain"/>}  quantidadePost={home?.quantidadeProjetos || '0'}
              onPress={() => navigation.push('Post', {pop:true})} color={global.blue} titulo= "Projetos"/>
            <CardInformativo icon={<Image source={estrela} style={stylesDefault.iconeCard} resizeMode="contain"/>}  quantidadePost={home?.quantidadeIdeias || '0'}
             onPress={() => navigation.push('Post', {tipo:'indicacao', pop:true})} color={global.blue} titulo= "Indicações"/>
    
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}
