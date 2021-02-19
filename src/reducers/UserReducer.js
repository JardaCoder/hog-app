const initialState = {
    name: '',
    email: ''
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setUsuario':
            let user = action.usuario
            return user;
        break;
    }

    return state;
}