import initialState from '../store/initialState';
import {CHANGE_LOGIN_FIELD_VALUE, USERCONNECT, SHOWERROR,SHOWSUCCESSIGNIN, APIDATACITIES, USERSIGNIN, CHANGE_SIGNIN_FIELD_VALUE, USERSIGNINCUST, SHOWSUCCESSIGNINCUST, CHANGE_SIGNIN_CUST_FIELD_VALUE, APIDATACATEGORIES} from '../actions';

// console.log(initialState);

export default (state = initialState, action = {}) => {

    switch(action.type){
        case CHANGE_LOGIN_FIELD_VALUE:
            return {
                ...state, // ...state est une copie du state = initialState pour éviter de manipuler directement le state initiale
                login: {
                    ...state.login,
                    [action.name] : action.value
                }
            
            };
         
        case USERCONNECT:
            
            return {
                ...state,
                connectedUser: action.apiData, 
                login:{  
                token: action.apiData.token, 
            }
                  
            };
         
            case CHANGE_SIGNIN_FIELD_VALUE:
                return {
                    ...state, 
                    signin:{
                        ...state.signin,
                        [action.name] : action.value
                    }
                };

                case CHANGE_SIGNIN_CUST_FIELD_VALUE:
                    return {
                        ...state, 
                        signinCust:{
                            ...state.signinCust,
                            [action.name] : action.value
                        }
                    };
    

            case USERSIGNIN:
            
                return {
                    ...state,
                    signin: action.apiSiginData, 
                    signin: {    
                    company_name: '',
	                siren_number: '',
	                firstname: '',
	                lastname: '',
	                email: '',
                    password: '',
                }
                };


                case USERSIGNINCUST:
            
                    return {
                        ...state,
                        signinCust: action.apiSiginCustData,  
                        signinCust: {     
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                    }
                    };


                case SHOWERROR:
                    return {
                        ...state,
                        login: {
                        messageError: action.messageError,    
                        }
                    };

            case SHOWSUCCESSIGNIN:
                return {
                    ...state,
                    signin: {
                        signinmessageSucces: action.signinmessageSucces,    
                    }
                };

                case SHOWSUCCESSIGNINCUST:
                    return {
                        ...state,
                        signinCust: {
                            signinmessageSuccesCust: action.signinmessageSuccesCust,    
                        }
                    };
                        case APIDATACITIES:
                            return {
                                ...state,
                                cities: {
                                    city: action.citiesData,    
                                }
                            };


                            case APIDATACATEGORIES:
                                return {
                                    ...state,
                                    categories: {
                                        category: action.categoriesData,    
                                    }
                                };
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}
