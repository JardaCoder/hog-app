import React from "react";
import { View, SafeAreaView } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style'
import Header from './../../components/Header/header';

export default function Post() {

  const [userState, dispatch] = useUserContext();

  const navegarParaRank =  () =>{
    //TODO
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Postagens"}/>
      <View style={style.container}>
       
      </View>
    </SafeAreaView>
  );
}
