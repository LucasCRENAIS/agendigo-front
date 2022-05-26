import initialState from '../store/companies';
import {APIDATACOMPANIES, COMPANIES} from '../actions';

// console.log(initialState);

const companiesReducer =(state = initialState, action = {}) => {

    switch(action.type){
       
                        case APIDATACOMPANIES:
                            return {
                                ...state,
                               
                                company: action.companiesData,    
                             
                            };
                            case COMPANIES:
                                return{
                                    ...state,
                                    company:[], 
                                };

                           
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default companiesReducer;