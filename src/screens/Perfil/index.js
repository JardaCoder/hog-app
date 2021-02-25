import React, {useEffect} from "react";
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

export default function Perfil() {

  const [userState, dispatch] = useUserContext();
  const navigation = useNavigation();

  const navegarParaRank =  () =>{
    navigation.push('Ranking')
  }

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
          <CardPosicao cor={global.red}/>
          <CardPosicao cor={global.blue}/>

          <View style={style.navegarParaRank}>
            <TouchableOpacity  onPress={() => navegarParaRank()}>
              <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
            </TouchableOpacity>  
          </View>
          
          <Text style={[stylesDefault.tituloMaior, style.titulo]}>Atalhos:</Text>
          <ScrollView horizontal={true} style={style.scrollAtalhos}>
            <CardInformativo titulo="Minhas postagens"/>
            <CardInformativo titulo= "TechWiki" onPress={() => util.abrirLink("http://techwiki.souhibrido.com.br/")}/>
            <CardInformativo titulo= "Vagas" onPress={() => util.abrirLink("https://www.hibrido.com.br/vagas/")}/>
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
