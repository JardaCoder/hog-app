import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';

/**
 * lógica interna
 */
import api from '../services/api'
import { useUserContext } from "../contexts/UserContext";
import UserReducer from "../reducers/UserReducer";

function usePost(){

const [state, dispatch] = useUserContext()

function PostException(message) {
    this.message = message;
    this.name = "PostException";
}

const buscarPosts = async (filtro, sortField) => {
    let posts;

    await api.post('/api/post/filtrar?buscarTodos=true&sortDirection=DESC&sortField=' + sortField , filtro ).then((response) => {
        posts = response.data;
    }).catch((error) => {
        console.log(error)
        throw new PostException('Problema ao buscar Usuarios')
    })

    
    return posts;
}


   return[buscarPosts]
}

export default usePost;