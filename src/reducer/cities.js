import initialState from '../store/cities';
import { APIDATACITIES} from '../actions';

// console.log(initialState);

const citiesReducer =(state = initialState, action = {}) => {

    switch(action.type){
       
                        case APIDATACITIES:
                            return {
                                ...state,
                               
                                    city: action.citiesData,    
                             
                            };

        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default citiesReducer;