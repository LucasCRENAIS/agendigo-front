import initialState from '../store/signinCust';
import {USERSIGNINCUST, SHOWSUCCESSIGNINCUST, CHANGE_SIGNIN_CUST_FIELD_VALUE,} from '../actions';

// console.log(initialState);

const signinCustReducer = (state = initialState, action = {}) => {

    switch(action.type){

                case CHANGE_SIGNIN_CUST_FIELD_VALUE:
                    return {
                        ...state, 
                    
                            [action.name] : action.value
                      
                    };
    


                case USERSIGNINCUST:
            
                    return {
                        ...state,
                        signinCust: action.apiSiginCustData,  
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                  
                    };


                case SHOWSUCCESSIGNINCUST:
                    return {
                        ...state,
                  
                            signinmessageSuccesCust: action.signinmessageSuccesCust,    
                    
                    };
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}
export default signinCustReducer;