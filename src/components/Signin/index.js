
import bannerContact from '../../assets/contact_banner.svg';
import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

// TODO Proptypes

const Signin = ({email, password, manageFieldChange,manageSubmitCust,manageFieldChangeCust, firstname,lastname,siren_number,company_name, manageSubmit,signinmessageSucces, firstnameCust, lastnameCust, emailCust, passwordCust, signinmessageSuccesCust}) => {
	console.log(manageFieldChange);


  return (
    
<div className="login">
	<section className="logins">
		<div className="container">
			<div className="title mb-5">
				<h6>Inscription</h6>
				<h2>Vos 2 formulaires 
					<br></br>d'inscriptions
				</h2>
			</div>
			<div className="row">
				<div className="col-md-6 forms form-part">
					<h3 className="text-center text-white mb-5">Vous êtes un particulier ?</h3>
					<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                In quod explicabo molestias facilis animi voluptatem error! Eos deserunt tempore voluptas consectetur eaque quae dicta quia omnis cumque id, nostrum</p>
					<form onSubmit={(event) => {

        event.preventDefault();
		manageSubmitCust();

    

        }
	
      }
	  className="row g-3">
						<div className="col-md-6">
							<label for="inputName" className="form-label">Nom</label>
							<input type="text" className="form-control" id="inputName" required="required" value={lastnameCust} onChange={(event) => manageFieldChangeCust('lastname', event.target.value)} ></input>
							</div>
						<div className="col-md-6">
							<label for="inputFirstame" className="form-label">Prénom</label>
							<input type="text" className="form-control"  id="inputFirstame" required="required"  value={firstnameCust} onChange={(event) => manageFieldChangeCust('firstname', event.target.value)} ></input>
						</div>
						<div className="col-12 mb-3">
							<label for="inputEmail" className="form-label">Email</label>
							<input type="email" className="form-control"  id="inputEmailCust" required="required" value={emailCust} onChange={(event) => manageFieldChangeCust('email', event.target.value)} ></input>
						</div>
						<div className="col-12">
							<label for="inputPassword4" className="form-label">Mot de passe</label>
							<input type="password" className="form-control"  id="inputPassword6" required="required" value={passwordCust} onChange={(event) => manageFieldChangeCust('password', event.target.value)} ></input>
						</div>
						<div className="col-12">
							<label for="inputPassword5" className="form-label">Confirmez votre Mot de passe</label>
							<input type="password" className="form-control" required="required"  id="inputPassword7"></input>
						</div>
						<div className="col-12 mt-5">
							<button type="submit" className="btn btn-primary">S'inscrire</button>
							<Link to="/login" className="link-account">J'ai déjà un compte</Link>
						</div>
						{
							signinmessageSuccesCust &&
                      <>
					  <div className="alert alert-success" role="alert">{signinmessageSuccesCust}</div>
    
                      </>
                    }
					</form>
					<div className="banner-contact">
					<img className ="img-fluid" src ={bannerContact}></img>
				</div>
				</div>
				
				<div className="col-md-6 forms form-pro">
					<h3 className="text-center mb-5">Vous êtes un pro ?</h3>
					<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In quod explicabo molestias facilis animi voluptatem error! Eos deserunt tempore voluptas consectetur eaque quae dicta quia omnis cumque id, nostrum</p>
					<form onSubmit={(event) => {
        event.preventDefault();
                
        manageSubmit();
  
        }
      } className="row g-3">
						<div className="col-md-6">
							<label for="inputName" className="form-label">Nom</label>
							<input type="text" className="form-control" id="inputName" required="required" value={lastname} onChange={(event) => manageFieldChange('lastname', event.target.value)}></input>
						</div>
						<div className="col-md-6">
							<label for="inputFirstame" className="form-label">Prénom</label>
							<input type="text" className="form-control" required="required" id="inputFirstame" value={firstname} onChange={(event) => manageFieldChange('firstname', event.target.value)}></input>
						</div>
						<div className="col-md-12">
							<label for="inputBusiness" className="form-label">Raison social de l'entreprise</label>
							<input type="text" className="form-control" required="required" id="inputBusiness" value={company_name} onChange={(event) => manageFieldChange('company_name', event.target.value)}></input>
						</div>
						<div className="col-md-12">
							<label for="inputSiren" className="form-label">Siren de l'entreprise *</label>
							<input type="text" className="form-control" required="required" id="inputSiren" value={siren_number} onChange={(event) => manageFieldChange('siren_number', event.target.value)}></input>
						</div>
						<div className="col-md-12">
							<label for="inputState" className="form-label">Les services</label>
							<select id="inputState " required="required"className="form-select">
								<option selected>Votre service</option>
								<option value="1">Coiffeur</option>
								<option value="2">Salon de Beauté</option>
								<option value="3">Plombier</option>
								<option value="4">Garage</option>
							</select>
						</div>
						<div className="col-12 mb-3">
							<label for="inputEmail" className="form-label">Email</label>
							<input type="email" className="form-control" id="inputEmail" required="required" value={email} onChange={(event) => manageFieldChange('email', event.target.value)}></input>
						</div>
						<div className="col-12">
							<label for="inputPassword4" className="form-label">Mot de passe</label>
							<input type="password" className="form-control" id="inputPassword4" required="required" value={password}  onChange={(event) => manageFieldChange('password', event.target.value)}></input>
						</div>
						<div className="col-12">
							<label for="inputPassword5" className="form-label">Confirmez votre Mot de passe</label>
							<input type="password" className="form-control" id="inputPassword5"></input>
						</div>
						<div className="col-12 mt-5">
							<button type="submit" className="btn btn-primary">S'inscrire</button>
							<Link to="/login" className="link-account">J'ai déjà un compte</Link>
						</div>
						{
							signinmessageSucces &&
                      <>
					  <div className="alert alert-success" role="alert">{signinmessageSucces}</div>
    
                      </>
                    }
					</form>
				</div>
			</div>
		</div>
	</section>
</div>
);

}


export default Signin;

