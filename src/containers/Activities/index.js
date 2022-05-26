import { connect } from 'react-redux';

import Activities from '../../components/Activities';

// import de l'action creator
import { activitiesDisplay } from '../../actions';

const mapStateToProps = (state,ownProps) => {
    console.log('activities test',ownProps)
    return{
 activities: state.activities.activity,
 
 city:ownProps.city,
 
}


};


const mapDispatchToProps = (dispatch,ownProps) => ({
ApiActivities: () => dispatch(activitiesDisplay(ownProps.city)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Activities);
