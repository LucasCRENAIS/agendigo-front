import {Redirect} from 'react-router-dom';
import React from 'react';
import './login.css';

// TODO Proptypes

const Login = ({username, password, manageFieldChange, manageSubmit, isConnected, messageError}) => {

  if (isConnected){
    return <Redirect to="/" />
  }
  
  return (
    
    <div className="login">
      <section className="connexion">
        <div className="container">
          <div className="row">
            <div className="forms">
            <h3 className="text-center mb-5 mt-5">Connexion</h3>
            <p className="mb-5 text-center">Je possède déjà un compte professionnel et/ou particulier</p>
                <form onSubmit={(event) => {
        event.preventDefault();
                
        manageSubmit();
  
        }
      }
      className="row g-3">
                    <div className="col-md-6 mx-auto card-form">
                      <div className=" mb-3">
                    
                          <input type="email " className="mb-2 form-control " id="inputEmail" placeholder="Identifiant / adresse mail"  required="required" value={username} onChange={(event) => manageFieldChange('username', event.target.value)}></input>
                          <a className="forgetData" href="index.html">identifiant oublié ?</a>
                        
                 
                         
                      </div>
                      <div className="">
                          <input type="password" className="form-control mb-2" id="inputPassword4" placeholder="Mot de passe"    required="required"  value={password}  onChange={(event) => manageFieldChange('password', event.target.value)}></input>
                          <a className="forgetData" href="index.html">mot de passe oublié ?</a>
                     
                      </div>
                      {
                      messageError &&
                      <>
                      <p  className="my-3 errormessage">{messageError}</p>
                      </>
                    }
                      <div className=" mt-5">
                          <button type="submit" className="btn btn-primary">Se connecter</button>
                          <a className="mx-3 link-account" href="signin">Je n'ai pas encore de compte</a>
                      </div>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
);

}


export default Login;