import React, {useEffect} from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from './../../util/style';
import style from './style';

export default function App() {

  const [userState, dispatch] = useUserContext();

  const navegarParaRank =  () =>{
    //TODO
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <View style={style.container}>
        <View style={style.header}>
            <Image style={style.image} source={{uri: userState.photoUrl}}></Image>
            <View style={style.conteudoHeader}>
              <Text style={stylesDefault.titulo}>Oi, Jardel</Text>
              <Text style={stylesDefault.tituloMaior}>Tudo bem?</Text>
              <Text style={stylesDefault.textoPadrao}>Pontuação atual:</Text>
            </View>
        </View>
        <View style={[style.cardRanking, {backgroundColor:global.red}]}>
        </View>
        <View style={style.cardRanking}>
        </View>
        <View style={style.cardRanking}>
        </View>
        <View style={style.navegarParaRank}>
          <TouchableOpacity  onPress={() => navegarParaRank()}>
            <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
          </TouchableOpacity>  
        </View>

      </View>
    </SafeAreaView>
  );
}
