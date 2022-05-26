import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import CompanyExample from '../../components/CompanyExample';


const mapStateToProps = (state, ownProps) => {
    console.log('le state de mapstatetoProps',state);

    console.log(ownProps);
    
    return{
    id: ownProps.match.params.id,
}


};


    
    
    export default withRouter(connect(mapStateToProps)(CompanyExample));