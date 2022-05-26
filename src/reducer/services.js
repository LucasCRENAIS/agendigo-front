import initialState from '../store/services';
import {APIDATASERVICES, SERVICES, APIDATADATES,DATES, ISACTIVE, APPOINTMENT, MANAGE_HOURS_VALUE, MANAGE_DATE_VALUE,SHOWSUCCESSAPPOINTMENT,SHOWERRORAPPOINTMENT, MANAGE_CLOSE_MODAL} from '../actions';

// console.log(initialState);

const servicesReducer =(state = initialState, action = {}) => {

    switch(action.type){
       
                        case APIDATASERVICES:
                            return {
                                ...state,
                               
                                service: action.servicesData,    
                             
                            };
                            case SERVICES:
                                return{
                                    ...state,
                                    service:[], 
                                };

                                case APIDATADATES:
                                    return {
                                        ...state,
                                       
                                        dates: action.datesData,    
                                 };

                                 case DATES:
                                    return{
                                        ...state,
                                        dates:[], 
                                    };


                                    case ISACTIVE:
                                            return{
                                                ...state,
                                                isActive:action.services
                                            }

                                           case APPOINTMENT:
                                               return{
                                                   ...state,
                                                   services:action.apiDataAppointment,
                                               }

                                               case MANAGE_HOURS_VALUE:
                                                    return {
                                                          ...state, // ...state est une copie du state = initialState pour éviter de manipuler directement le state initiale
                                                 [action.name] : action.value 
                                                
                                                };
                                                case MANAGE_DATE_VALUE:
                                                    return {
                                                          ...state, // ...state est une copie du state = initialState pour éviter de manipuler directement le state initiale
                                                 [action.name] : action.value 
                                                
                                                };

                                                case SHOWSUCCESSAPPOINTMENT:
                                                    return {
                                                        ...state,
                                                    
                                                            appointmentmessageSucces: action.appointmentmessageSucces,    
                                                            appointmentmessageError:'',
                                                    };


                                                    case SHOWERRORAPPOINTMENT:
                                                    return {
                                                        ...state,
                                                    
                                                            appointmentmessageError: action.appointmentmessageError,    
                                                            appointmentmessageSucces:'',
                                                    };


                                                    case MANAGE_CLOSE_MODAL:
                                                        return {
                                                            ...state,
                                                        
                                                            hours: '',
                                                            date:'',
                                                            appointmentmessageSucces: null,    
                                                            appointmentmessageError: null,
                                                         
                                                        };
        
    
    
                                 
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default servicesReducer;