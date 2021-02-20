import React, {useEffect} from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style';
import Header from './../../components/Header/header';

export default function Perfil() {

  const [userState, dispatch] = useUserContext();

  const navegarParaRank =  () =>{
    //TODO
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Meu perfil"}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.header}>
            <Image style={style.image} source={{uri: userState.photoUrl}}></Image>
            <Text style={stylesDefault.titulo}>{userState.name}</Text>
          </View>
          <Text style={[stylesDefault.tituloMaior, style.titulo]}>Pontuação</Text>

          <View style={[style.cardRanking, stylesDefault.boxShadow, {backgroundColor:global.red}]}>
          </View>
          <View style={[style.cardRanking, stylesDefault.boxShadow]}>
          </View>
          <View style={style.navegarParaRank}>
          <TouchableOpacity  onPress={() => navegarParaRank()}>
            <Text style={stylesDefault.textoPequenoRed}> + ver rank completo</Text>
          </TouchableOpacity>  
        </View>
          
          <Text style={[stylesDefault.tituloMaior, style.titulo]}>Atalhos:</Text>
          <ScrollView horizontal={true} style={{width:'100%', flexDirection: 'row'}}>
            <View style={[stylesDefault.boxShadow,
              {width:100, height:120, backgroundColor:'white', borderRadius:5, marginHorizontal:4}]}>
            </View>
            <View style={[stylesDefault.boxShadow,
              {width:100, height:120, backgroundColor:'white', borderRadius:5, marginHorizontal:4}]}>
            </View>
            <View style={[stylesDefault.boxShadow,
              {width:100, height:120, backgroundColor:'white', borderRadius:5, marginHorizontal:4}]}>
            </View>
            <View style={[stylesDefault.boxShadow,
              {width:100, height:120, backgroundColor:'white', borderRadius:5, marginHorizontal:4}]}>
            </View>
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
