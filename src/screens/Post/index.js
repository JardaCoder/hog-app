
import React, {useEffect, useState, useRef, useCallback, useMemo} from "react";
import { View, Text, Image, SafeAreaView, FlatList, ActivityIndicator,
   ImageBackground,TouchableOpacity,ScrollView, VirtualizedList } from "react-native";
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
import { NotificacaoProvider } from './../../contexts/NotificationContext';

export default function Post({route}) {

  const tipo = route.params?.tipo;
  const [userState, dispatch] = useUserContext();
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(0);
  const menu = useRef(null);
  const menuFiltro = useRef(null);
  const [buscarPosts] = usePost();
  const [dados, setDados] = useState([]);
  const [filter, setFilter] = useState(tipo)
  const [filtro, setFiltro] = useState({tipoPost:'PROJETO', situacaoProjeto:null, categoriaId: null, usuarioId: userState.id});
  const [categorias, setCategorias] = useState([]);
  const scroll = useRef(null)
  const [paginacao, setPaginacao] = useState({
    sortField:'inclusao'
  })
  const [categoriaId, setCategoriaId] = useState(null);

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
    if(loading) return;
    setLoading(true);
    
    filtro.categoriaId = filtro.tipoPost == 'INDICACAO' ? null : categoriaId;

    if(filtro.tipoPost == 'RECADO'){
      filtro.categoriaId = null;
    }

    let dados = await buscarPosts(filtro, paginacao.sortField);

    setDados(dados); 
    setLoading(false);
  }

  const upCard = async (item, index) =>{
    let jaExiste = false;
    let bodyInteracao = null;

    if(item.postInteracao?.usuarioId == userState.id && item.postInteracao?.tipoAcao == 'UP'){
      return;
    }

    if(item.postInteracao?.id){
      jaExiste = true;
    }

    if(jaExiste){
      bodyInteracao = item.postInteracao;
      bodyInteracao.tipoAcao = 'UP';

    }else{
      //cria interacao
      bodyInteracao = {
        tipoAcao:'UP',
        postId:item.id,
        usuarioId:userState.id
      }
    }

    
    if(bodyInteracao != null)
      await api.post('/api/usuarioPostInteracao', bodyInteracao).then(result =>{
        item.postInteracao = result.data;
      })

      if(!jaExiste){
        item.quantidadeUp++;
      }else{
        item.quantidadeUp++
        item.quantidadeDown--;
      }
      setUpdate((prevState) => prevState + 1);
  }

  const downCard = async (item, index) =>{
    let jaExiste = false;
    let bodyInteracao = null;

    if(item.postInteracao?.usuarioId == userState.id && item.postInteracao?.tipoAcao == 'DOWN'){
      return;
    }

    if(item.postInteracao?.id){
      jaExiste = true;
    }

    if(jaExiste){
      bodyInteracao = item.postInteracao;
      bodyInteracao.tipoAcao = 'DOWN';
    }else{
      //cria interacao
      bodyInteracao = {
        tipoAcao:'DOWN',
        postId:item.id,
        usuarioId:userState.id
      }
    }

    await api.post('/api/usuarioPostInteracao', bodyInteracao).then(result =>{
      item.postInteracao = result.data;
    })

    if(!jaExiste){
      item.quantidadeDown++;
    }else{
      item.quantidadeDown++
      item.quantidadeUp--;
    }
    
    setUpdate((prevState) => prevState + 1);
  }

  const showMenu = (ref) =>{
    ref.current.show();
  }

  const hideMenu = (ref) =>{
    ref.current.hide();
  }

  const refresh = (tipo, situacao) =>{
    filtro.tipoPost = tipo;
    filtro.situacaoProjeto = situacao;
    setDados([]);
    buscarTodosPosts();
  }


  const ordenarPorMaisCurtidos = () => {
   let newDados = dados.sort(function (a, b) {
      if (a.quantidadeUp > b.quantidadeUp) {
        return -1;
      }
      if (a.quantidadeUp < b.quantidadeUp) {
        return 1;
      }
      return 0;
    });

    setDados(newDados);
    setUpdate((prevState) => prevState+1)

  }



  const renderCategoria = useCallback(
    () => {
      return categorias.map((item, index) => (
        <MenuItem key={index} onPress={() =>{hideMenu(menuFiltro); setCategoriaId(item.id)}}>{item.nome}</MenuItem>
      ));
    },
    [categorias],
  )

  const Item = ({ item, onPress, index}) => (
    <TouchableOpacity onPress={onPress} style={[style.item, stylesDefault.boxShadow,  ]}>
          <ImageBackground source={{uri : item.imagem?.urlImagem}} style={style.image} resizeMode="cover">
              <Text style={[stylesDefault.textoPadrao, style.textoCard]}>{item.titulo}</Text>
              {item.tipoPost == 'INDICACAO' &&(
                 <Text style={[style.textoCategoria, {backgroundColor: global.red}]}>Indicação</Text>
              )}
              <Text style={[style.textoCategoria, {backgroundColor: item.categoria?.hexaCor}]}>{item.categoria?.nome}</Text>
          </ImageBackground>
       <View style={[style.footerCard]}>
          <Image source={{uri:item.usuario.fotoUrl}} style={style.imagemUsuario}></Image>
          <View style={style.containerTexto}>
              <Text style={stylesDefault.textoPadraoBold}>{item.usuario?.nome}</Text>
              <Text style={stylesDefault.textoPequenoRed}>{item.usuario?.pontosSplit} pontos</Text>
          </View>
          <View style={style.botoes}>
          <TouchableOpacity style={style.up} onPress={() => upCard(item, index)}>
              <AntDesign name="up" size={24} color={item.postInteracao?.usuarioId == userState.id && item.postInteracao?.tipoAcao == 'UP' ? global.red : '#fff'} />
              <Text style={style.quantidadeUpDown}>{item.quantidadeUp || 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={style.up} onPress={() => downCard(item, index)}>
              <Text style={style.quantidadeUpDown}>{item.quantidadeDown || 0}</Text>
              <AntDesign name="down" size={24} color={item.postInteracao?.usuarioId == userState.id && item.postInteracao?.tipoAcao == 'DOWN' ? global.red : '#fff'} />
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

  const verificarParametros = () =>{
    if(route.params?.tipo == 'indicacao'){
      filtro.categoriaId = null;
      setTimeout(() => {
        refresh('INDICACAO', null)
      },200);
      
    } else if(route.params?.tipo == 'recado'){
      setTimeout(() => {
        refresh('RECADO', 'NOVO')
      },200);
      
    }else{
      setTimeout(() => {
        refresh('PROJETO', 'NOVO')
      },200);
    }
  }


  useFocusEffect(
    React.useCallback(() => {
      //buscarTodosPosts()
      //verificarParametros()
    
    }, [])
  )

  useEffect(() => {   
    buscarTodosPosts();
  }, [categoriaId])

  useEffect(() => {
    verificarParametros()
    buscarCategorias();
  }, [])

  return (

    <SafeAreaView style={[stylesDefault.container]}>
      <Header titulo={"Postagens"} pop={route.params?.pop}></Header>
      <View style={style.container}>
        <VirtualizedList
          style={style.lista}
          showsVerticalScrollIndicator={false}
          data={dados}
          extraData={update}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          getItemCount={() => dados.length}
          getItem={(data, index) => {
            return data[index]
          }}
          removeClippedSubviews={true}
          refreshing={false}
          ListEmptyComponent={ !loading ? <ListVazia titulo="Nenhum post encontrado"/> : null}
          ListHeaderComponentStyle={{height:70, backgroundColor:'#fff', paddingHorizontal:15}}
          ListHeaderComponent={() =>(
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <ScrollView ref={scroll} showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', flexDirection:'row', height:30, marginBottom:10}}>
                <TouchableOpacity style={[style.itemHeader,
                   {borderBottomColor:filtro.tipoPost == 'PROJETO' && filtro.situacaoProjeto == 'NOVO' ? global.lightBlue : 'transparent'}]} onPress={() => refresh('PROJETO', 'NOVO')}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Projetos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filtro.tipoPost == 'INDICACAO' ? global.lightBlue : 'transparent'}]}  onPress={() =>{ refresh('INDICACAO', null);setCategoriaId(null)}}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Indicações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filtro.tipoPost == 'RECADO' ? global.lightBlue : 'transparent'}]}  onPress={() =>{ refresh('RECADO', 'NOVO');setCategoriaId(null)}}>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Recados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.itemHeader, 
                  {borderBottomColor:filtro.tipoPost == 'PROJETO' && filtro.situacaoProjeto == 'ANDAMENTO' ? global.lightBlue : 'transparent'}]}  onPress={() =>{refresh('PROJETO', 'ANDAMENTO');}  }>
                  <Text style={[stylesDefault.textoPadrao, {fontSize:14}]}>Em andamento</Text>
                </TouchableOpacity>
              </ScrollView>

              <View style={[style.containerFiltros, {justifyContent: filtro.tipoPost == 'PROJETO' ? 'space-between' : 'flex-end'}]}>
                {filtro.tipoPost == 'PROJETO' &&(
                  <Menu
                    ref={menuFiltro}
                    button={<FontAwesome onPress={() => showMenu(menuFiltro)} name="filter" size={24} color="black" />}
                  >
                    <MenuItem onPress={() => hideMenu(menuFiltro)} disabled>Categoria</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={() =>{hideMenu(menuFiltro); setCategoriaId(null)}}>Todas</MenuItem>
                    {renderCategoria()}
                  </Menu>
                )}

                <Menu
                  ref={menu}
                  button={<FontAwesome5  onPress={() => showMenu(menu)} name="sort-amount-up-alt" size={24} color="black" />}
                >
                  <MenuItem onPress={() => hideMenu(menu)} disabled>Ordenar por</MenuItem>
                  <MenuDivider />
                  <MenuItem onPress={() => {hideMenu(menu); buscarTodosPosts()}}>Mais recente</MenuItem>
                  <MenuItem onPress={() => {hideMenu(menu); ordenarPorMaisCurtidos();}} >Mais curtido</MenuItem>
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
