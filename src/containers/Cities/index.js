import { connect } from 'react-redux';

import Cities from '../../components/Cities';

// import de l'action creator
import { citiesDisplay } from '../../actions';

const mapStateToProps = state => {
    console.log('citiestest',state)
    return{
 cities: state.cities.city,
 
}


};


const mapDispatchToProps = (dispatch) => ({
ApiCities: () => dispatch(citiesDisplay()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cities);
