import initialState from '../store/activities';
import {APIDATAACTIVITIES, ACTIVITIES} from '../actions';

// console.log(initialState);

const activitiesReducer =(state = initialState, action = {}) => {

    switch(action.type){
       
                        case APIDATAACTIVITIES:
                            return {
                                ...state,
                               
                                activity: action.activitiesData,    
                             
                            };

                            case ACTIVITIES:
                                return{
                                    ...state,
                                    activity:[], 
                                };
        default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
            return {
                ...state,
            };
    }

}

export default activitiesReducer;