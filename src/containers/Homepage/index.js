import { connect } from 'react-redux';

import Homepage from '../../components/Homepage';

// import de l'action creator
// CATEGORIES = categoriesDisplay
import { categoriesDisplay } from '../../actions';

const mapStateToProps = state => {
    console.log('categoriestest',state)
    return{
 categories: state.categories.category,
 isConnected: state.login.connectedUser != null,
}


};


const mapDispatchToProps = (dispatch) => ({
ApiCategories: () => dispatch(categoriesDisplay()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
