
/**
 * lógica interna
 */
import React from "react";
import api from '../services/api'
import { useNotificationContext } from "../contexts/NotificationContext";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';


function useNotificacao(){
const [state, dispatch] = useNotificationContext();
const notificationListener  = React.useRef(null);

function NotificacaoException(message) {
    this.message = message;
    this.name = "NotificacaoException";
}


const getExpoToken = async () =>{
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
    
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } 
    return token;

}

const buscarNotificacoes =  async (id) => {

    
    await api.post('/api/notificacao/filtrar?buscarTodos=true&sortField=id&sortDirection=DESC', {usuarioId:id}).then((response) => {
        if(response.data)
          dispatch({
              type: 'setNotificacoes',
              notificacoes: response.data
          });
    }).catch((error) => {
        console.log(error)
    })
}

const setListeners = (usuarioId) =>{
    notificationListener.current  = Notifications.addNotificationReceivedListener(notification => {
        buscarNotificacoes(usuarioId);
    });

    Notifications.removeNotificationSubscription(notificationListener);
}

const visualizarTodas = async (id) => {
    await api.post('/api/notificacao/visualizar?usuarioId=' + id, {}).then((response) => {

    }).catch((error) => {
        console.log(error)
    })
}



   return[getExpoToken, buscarNotificacoes, setListeners, visualizarTodas]
}

export default useNotificacao;
