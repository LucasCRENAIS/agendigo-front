import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';

import {LOGOUT} from '../../actions';

const mapStateToProps = (state) => ({
email: state.login.email,
isConnected: state.login.connectedUser != null,
username: state.login.username,
login:state.login
});

const mapDispatchToProps =(dispatch) => ({

    disconnect:() =>{
        dispatch({type:LOGOUT});
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

