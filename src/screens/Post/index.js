import React, {useEffect, useState, useRef, useCallback} from "react";
import { View, Text, Image, SafeAreaView, FlatList, ActivityIndicator, ImageBackground,TouchableOpacity,ScrollView } from "react-native";
import { useUserContext } from "../../contexts/UserContext";
import stylesDefault from '../../util/style';
import style from './style'
import Header from './../../components/Header/header';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome5,AntDesign,FontAwesome  } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import usePost from './../../hooks/usePost';
import ListVazia from './../../components/ListVazia/header';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

export default function Post({route}) {

  const tipo = route.params?.tipo == 'indicacao' ? 1 : 0;
  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const menu = useRef(null);
  const menuFiltro = useRef(null);
  const [buscarPosts] = usePost();
  const [dados, setDados] = useState([]);
  const [filter, setFilter] = useState(tipo)
  const filtro = {tipoPost:'PROJETO'};
  const [categorias, setCategorias] = useState([]);

  const navigation = useNavigation();

  const buscarCategorias = async () =>{
    await api.get('/api/categoria/todos').then(result => {
      setCategorias(result.data);
    });
  }


  const verDetalhes = (post) => {
    navigation.push("PostDetalhe", {post:post})
  }

  const buscarTodosPosts = async () => {
    console.log('op')
    setLoading(true);
    let dados = await buscarPosts({});
    setDados(dados); 
    setLoading(false);
  }

  const upCard = (item, index) =>{
    item.quantidadeUp++;
    setUpdate(update + 1);
  }

  const downCard = (item, index) =>{
    item.quantidadeDown++;
    setUpdate(update + 1);
  }

  const showMenu = (ref) =>{
    ref.current.show();
  }

  const hideMenu = (ref) =>{
    ref.current.hide();
  }

  const onHiddenMenu = () =>{
    buscarTodosPosts();
  }
  
  const mudarFilterState = (state) =>{
    setFilter(state);
    buscarTodosPosts();
  }

  const renderCategoria = useCallback(
    () => {
      return categorias.map((item, index) => (
        <MenuItem key={index} onPress={() =>{hideMenu(menuFiltro); filtro.categoriaId = item.id}}>{item.nome}</MenuItem>
      ));
    },
    [categorias],
  )

  const Item = ({ item, onPress, index}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow,  ]}>
          <ImageBackground source={{uri : item.imagem?.urlImagem}} style={style.image} resizeMode="cover">
              <Text style={[stylesDefault.textoPadrao, style.textoCard]}>{item.titulo}</Text>
              <Text style={[style.textoCategoria, {backgroundColor: item.categoria?.hexaCor}]}>{item.categoria?.nome}</Text>
          </ImageBackground>
       <View style={[style.footerCard]}>
          <Image source={{uri:userState.fotoUrl}} style={style.imagemUsuario}></Image>
          <View style={style.containerTexto}>
              <Text style={stylesDefault.textoPadraoBold}>{item.usuario?.nome}</Text>
              <Text style={stylesDefault.textoPequenoRed}>{item.usuario?.pontosSplit} pontos</Text>
          </View>
          <View style={style.botoes}>
          <TouchableOpacity style={style.up} onPress={() => upCard(item, index)}>
              <AntDesign name="up" size={24} color="#fff" />
              <Text style={style.quantidadeUpDown}>{item.quantidadeUp || 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={style.up} onPress={() => downCard(item, index)}>
              <Text style={style.quantidadeUpDown}>{item.quantidadeDown || 0}</Text>
              <AntDesign name="down" size={24} color="#fff" />
          </TouchableOpacity>
          </View>
       </View>
    </TouchableOpacity>
  );
  

  const renderItem = useCallback(
    ({ item, index}) => {
      return (
        <Item
          item={item}
          onPress={() =>verDetalhes(item)}
          index={index}
        />
      );
    },
    [update],
  )

  useFocusEffect(
    React.useCallback(() => {
      buscarTodosPosts()
    
    }, [])
  )


  useEffect(() => {
    filtro.tipoPost = filter == 0 ? 'PROJETO' : 'INDICACAO';
  }, [filter])

  useEffect(() => {
    buscarCategorias();
  }, [])

  return (
    // loading ? <Loading/> :
    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Postagens"}></Header>
      <View style={style.container}>
        <FlatList
          style={style.lista}
          showsVerticalScrollIndicator={false}
          data={dados}
          extraData={update}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // onEndReached={() => alert('Oi')}
          // onEndReachedThreshold={0.1}
          //onRefresh={buscarPosts}
          refreshing={false}
          ListEmptyComponent={ !loading ? <ListVazia titulo="Nenhum post encontrado"/> : null}
          ListHeaderComponentStyle={{height:70, backgroundColor:'#fff', paddingHorizontal:15}}
          ListHeaderComponent={() =>(
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', flexDirection:'row', height:30, marginBottom:10}}>
                <TouchableOpacity style={[style.itemHeader,
                   {borderBottomColor:filter == 0 ? global.lightBlue : 'transparent'}]} onPress={() => mudarFilterState(0)}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Projetos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filter == 2 ? global.lightBlue : 'transparent'}]}  onPress={() => mudarFilterState(2)}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Em andamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filter == 1 ? global.lightBlue : 'transparent'}]}  onPress={() => mudarFilterState(1)}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Indicações</Text>
                </TouchableOpacity>
              </ScrollView>

              <View style={[style.containerFiltros, {justifyContent: filter != 1 ? 'space-between' : 'flex-end'}]}>
                {filter != 1 &&(
                  <Menu
                    ref={menuFiltro}
                    onHidden={onHiddenMenu}
                    button={<FontAwesome onPress={() => showMenu(menuFiltro)} name="filter" size={24} color="black" />}
                  >
                    <MenuItem onPress={() => hideMenu(menuFiltro)} disabled>Categoria</MenuItem>
                    <MenuDivider />
                    {renderCategoria()}
                  </Menu>
                )}

                <Menu
                  ref={menu}
                  onHidden={onHiddenMenu}
                  button={<FontAwesome5  onPress={() => showMenu(menu)} name="sort-amount-up-alt" size={24} color="black" />}
                >
                  <MenuItem onPress={() => hideMenu(menu)} disabled>Ordenar por</MenuItem>
                  <MenuDivider />
                  <MenuItem onPress={() => hideMenu(menu)}>Mais recente</MenuItem>
                  <MenuItem onPress={() => hideMenu(menu)} >Mais curtido</MenuItem>
                </Menu>
              </View>
            </View>
          )}
          ListFooterComponent={() =>(
            loading ? 
              <ActivityIndicator size="large" color={global.red}></ActivityIndicator>
              : null
          )}
          ListFooterComponentStyle={{height:180, marginTop:10}}
        />
      </View>
    </SafeAreaView>
  );
}
