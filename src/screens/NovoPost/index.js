import React, {useEffect} from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style';
import Header from './../../components/Header/header';

export default function NovoPost() {

  const [userState, dispatch] = useUserContext();

  const navegarParaRank =  () =>{
    //TODO
  }

  return (
    <SafeAreaView style={[stylesDefault.container]}>
       <Header titulo={"Criar postagem"}/>
      <View style={style.container}>
        
      </View>
    </SafeAreaView>
  );
}
