const initialState = {
    notificacoes:[],
    quantidade:'0'
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setNotificacoes':
            let notificacoes = {
                notificacoes: action.notificacoes,
                quantidade: action.notificacoes.filter(item => item.seVisualizada == 'NAO').length.toString()
            }
            return notificacoes;
        break;
    }

    return state;
}