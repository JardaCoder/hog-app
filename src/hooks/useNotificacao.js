
/**
 * lógica interna
 */
import api from '../services/api'
import { useNotificationContext } from "../contexts/NotificationContext";
import Constants from 'expo-constants';
import { useRef } from "react/cjs/react.development";
import * as Notifications from 'expo-notifications';


function useNotificacao(){
const [state, dispatch] = useNotificationContext();
const notificationListener  = useRef();

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
    
    await api.post('/api/notificacao/filtrar?size=7&buscarTodos=true', {usuarioId:id}).then((response) => {
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



   return[getExpoToken, buscarNotificacoes, setListeners]
}

export default useNotificacao;