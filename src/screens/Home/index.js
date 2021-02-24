import React, {useEffect} from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from './../../util/style';
import style from './style';
import CardPosicao from '../../components/CardPosicao/index'

export default function Home() {

  const [userState, dispatch] = useUserContext();

  const navegarParaRank =  () =>{
    //TODO
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

      </View>
    </SafeAreaView>
  );
}
