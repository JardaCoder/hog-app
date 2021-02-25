import React, {useEffect} from "react";
import { View, Text, Image, SafeAreaView, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from './../../util/style';
import style from './style';
import CardPosicao from '../../components/CardPosicao/index'
import CardInformativo from "../../components/CardInformativo";
import { useNavigation } from "@react-navigation/core";


export default function Home() {

  const [userState, dispatch] = useUserContext();
  const navigation = useNavigation();

  const navegarParaRank =  () =>{
    navigation.push('Ranking')
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <View style={style.container}>
        <View style={style.header}>
            <Image style={style.image} source={{uri: userState.fotoUrl}}></Image>
            <View style={style.conteudoHeader}>
              <Text style={stylesDefault.titulo}>Oi, Jardel</Text>
              <Text style={stylesDefault.tituloMaior}>Tudo bem?</Text>
              <Text style={stylesDefault.textoPadrao}>Pontuação atual:</Text>
            </View>
        </View>
          <CardPosicao cor={global.red}/>
          <CardPosicao cor={global.blue}/>
          
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
