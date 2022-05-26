import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import du reducer
import  reducer  from '../reducer';
import  loginReducer  from '../reducer/login';
import  signinReducer  from '../reducer/signin';
import  signinCustReducer  from '../reducer/signinCust';
import  citiesReducer  from '../reducer/cities';
import  activitiesReducer  from '../reducer/activities';
import  companiesReducer  from '../reducer/companies';
import  servicesReducer  from '../reducer/services';
import  categoriesReducer  from '../reducer/categories';
// on importe notre premier middleware
import authMiddleware from '../middlewares/auth';


const rootReducer = combineReducers({
    login: loginReducer,
    signin: signinReducer,
    signinCust: signinCustReducer,
    cities: citiesReducer,
    activities: activitiesReducer,
    companies: companiesReducer,
    services: servicesReducer,
    categories: categoriesReducer,

})
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(authMiddleware),
));

// on rend visible notre store au monde !
export default store;

