import { connect } from "react-redux";

import App from '../../components/App';

// import de l'action creator
import { saveToken, citiesDisplay, LOAD_TOKEN_FROM_LOCALSTORAGE,companiesDisplay } from '../../actions';

const mapStateToProps = (state) => {
  console.log('citiestest et compagnies',state)
  return{
cities: state.cities.city,
companies: state.companies.company,


}


};

const mapDispatchToProps = (dispatch) => ({

  getTokenLocalStorage: () => {
  dispatch({type: LOAD_TOKEN_FROM_LOCALSTORAGE});},

  ApiCities: () => dispatch(citiesDisplay()),
  ApiCompanies: () => dispatch(companiesDisplay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
