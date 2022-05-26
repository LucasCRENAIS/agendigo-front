import initialState from '../store/login';
import {CHANGE_LOGIN_FIELD_VALUE, USERCONNECT, SHOWERROR, SAVETOKEN, LOGOUT} from '../actions';

// console.log(initialState);

const loginReducer = (state = initialState, action = {}) => {

    switch(action.type){
        case CHANGE_LOGIN_FIELD_VALUE:
            return {
                ...state, // ...state est une copie du state = initialState pour éviter de manipuler directement le state initiale
                    [action.name] : action.value  
         
            
            };
         
        case USERCONNECT:
            
            return {
                ...state,
           
                connectedUser: action.apiData,  

            };

            case LOGOUT:
                return{
                    ...state,
                    connectedUser: null,
                };
         
        case SHOWERROR:
            return {
                ...state,
       
                messageError: action.messageError,    
                       
                    };

        case SAVETOKEN:
            return{
                ...state,
                TokenStorage:action.TokenStorage,
                
                }


        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default loginReducer;