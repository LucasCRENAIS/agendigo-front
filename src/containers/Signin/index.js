import { connect } from 'react-redux';

import Signin from '../../components/Signin';

// import de l'action creator
import { signin, changeSigninCustFieldValue,changeSigninFieldValue, signinCust} from '../../actions';

const mapStateToProps = (state) => {
  console.log('userStateSignin:',state)
  return{
    company_name: state.signin.company_name,
    siren_number: state.signin.siren_number,
    firstname: state.signin.firstname,
    lastname: state.signin.lastname,
    category_id: state.signin.category_id,
    activity_id: state.signin.activity_id,
    email: state.signin.email,
    password: state.signin.password,
    signinmessageSucces:state.signin.signinmessageSucces,

    //customers
    firstnameCust: state.signinCust.firstname,
    lastnameCust: state.signinCust.lastname,
    emailCust: state.signinCust.email,
    passwordCust: state.signinCust.password,
    signinmessageSuccesCust:state.signinCust.signinmessageSuccesCust,

}
};

const mapDispatchToProps = (dispatch) => ({
  manageFieldChange: (name, value) => {
  dispatch(changeSigninFieldValue(name, value));
  },
  manageSubmit: () => {
    dispatch(signin());
    
    },


    manageFieldChangeCust: (name, value) => {
    dispatch(changeSigninCustFieldValue(name, value));
    },
  manageSubmitCust: (value) => {
  dispatch(signinCust());

  
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
