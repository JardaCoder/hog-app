import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';

/**
 * lógica interna
 */
import api from '../services/api'
import { useUserContext } from "../contexts/UserContext";
import UserReducer from "../reducers/UserReducer";

function useUsuario(){

const [state, dispatch] = useUserContext()

function UsuarioException(message) {
    this.message = message;
    this.name = "UsuarioException";
}

const buscarOuCriarUsuario = async (googleUser) =>{
    let usuario ={
        nome: googleUser.name,
        email: googleUser.email,
        fotoUrl: googleUser.photoUrl,
        tipoUsuario: 'COLAB'
    }

   await api.post('/api/usuario/criar', usuario).then((response) => {
        AsyncStorage.setItem('usuario', JSON.stringify(response.data));
        dispatch({
            type: 'setUsuario',
            usuario: response.data
        });

    }).catch((error) => {
        throw new UsuarioException('Problema ao criar ou buscar usuário')
    })
  
}

const salvarAlteracoesUsuario = async (usuario) => {
    await api.post('/api/usuario/', usuario).then((response) => {
        AsyncStorage.setItem('usuario', JSON.stringify(response.data));
        dispatch({
            type: 'setUsuario',
            usuario: response.data
        });

    }).catch((error) => {
        console.log(error)
        throw new UsuarioException('Problema ao alterarUsuario')
    })
}


   return[buscarOuCriarUsuario, salvarAlteracoesUsuario]
}

export default useUsuario;