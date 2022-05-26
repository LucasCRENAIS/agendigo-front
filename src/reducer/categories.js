import initialState from '../store/categories';
import {APIDATACATEGORIES} from '../actions';

// console.log(initialState);

const categoriesReducer = (state = initialState, action = {}) => {

    switch(action.type){
                      case APIDATACATEGORIES:
                                return {
                                    ...state,
                                 
                                        category: action.categoriesData,    
                                
                                };
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default categoriesReducer;