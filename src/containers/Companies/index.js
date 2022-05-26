import { connect } from 'react-redux';

import Companies from '../../components/Companies';

// import de l'action creator
import { companiesDisplay } from '../../actions';

const mapStateToProps = (state,ownProps) => {
    console.log('companies test',ownProps)
    return{
 companies: state.companies.company,
 activity:ownProps.name,
 city:ownProps.city,
 
}


};


const mapDispatchToProps = (dispatch, ownProps) => ({
ApiCompanies: () => dispatch(companiesDisplay(ownProps.city, ownProps.name)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Companies);
