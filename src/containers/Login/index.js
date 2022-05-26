import { connect } from 'react-redux';

import Login from '../../components/Login';

// import de l'action creator
import { login, changeLoginFieldValue } from '../../actions';

const mapStateToProps = (state) => {
  console.log('userState:',state)
  return{
username: state.login.username,
password: state.login.password,
messageError: state.login.messageError,
isConnected: state.login.connectedUser != null,
 
}
};

const mapDispatchToProps = (dispatch) => ({
  manageFieldChange: (name, value) => {
  dispatch(changeLoginFieldValue(name, value));
  },
  manageSubmit: () => {
   
    dispatch(login());
  
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
