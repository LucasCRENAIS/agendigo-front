import initialState from '../store/signin';
import {SHOWSUCCESSIGNIN, USERSIGNIN, CHANGE_SIGNIN_FIELD_VALUE, USERSIGNINCUST, SHOWSUCCESSIGNINCUST, CHANGE_SIGNIN_CUST_FIELD_VALUE,} from '../actions';

// console.log(initialState);

const signinReducer = (state = initialState, action = {}) => {

    switch(action.type){
         
            case CHANGE_SIGNIN_FIELD_VALUE:
                return {
                    ...state, 
              
                        [action.name] : action.value
                
                };

            case USERSIGNIN:
            
                return {
                    ...state,
                    signin: action.apiSiginData, 
                    company_name: '',
	                siren_number: '',
	                firstname: '',
	                lastname: '',
	                email: '',
                    password: '',
            
                };

            case SHOWSUCCESSIGNIN:
                return {
                    ...state,
                
                        signinmessageSucces: action.signinmessageSucces,    
                 
                };

              
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}
export default signinReducer;