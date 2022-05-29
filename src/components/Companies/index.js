import toulon from '../../assets/villes/toulon.jpg';
import avatarUserIcons from '../../assets/avatars-users-icons.svg';
import picsCategories from '../../assets/pics-categories.jpg';


import React, {useEffect} from 'react';
import './companies.css';
import { Link } from 'react-router-dom';

const Companies = ({ApiCompanies, companies, city, name}) =>{
  useEffect(
    ApiCompanies
 , 
 [],
);

 return (
     
<section className="services">
<div className="container">
    <div className="title mb-5 col-md-6">
        <h6>Je choisis mon service pro</h6>
        <h2>Sélectionnez le <span className="green-word">Professionnel</span> de votre choix
            pour le service <span className="blue-word">{name}</span> sur <span className="blue-word">{city}</span></h2>
    </div>



    <div className="row services-container">
    <div className="col-md-6 activity-services">
    {
      companies.map((company) =>{
  const jsxDirectory =(
    <>

        <div className="activity-services">
        <Link to={`/company/${company.id}/services`} >
        <div className="companies-card">
        <div style={{ backgroundImage: `url(https://agendigo.herokuapp.com/images/${company.image})` }} class="img-banner"></div>
            <div class="row">
                    <div class="service col-md-6">
                        <h4>{company.company_name}</h4>
                        <p>{(company.description).substring(0,55)}...</p>
                        <Link to= {`//www.google.com/maps/place/${company.address}+${company.postcode}+${company.city}/`} target="_blank" class="link-map">{company.address} {company.postcode} {company.city}</Link>
                    </div>
                    <div class="text-center col-md-6">
                            <li class="nav-item">
                                   <button type="button" class="btn btn-primary">Prendre un RDV</button>
                            </li>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    </>
    );
    return jsxDirectory;
    })
  }
  </div>
    <div className="col-md-6 pics">
          <img className ="img-fluid avatars-users-icons" src="https://agendigo.herokuapp.com/images/avatars-users-icons.svg"></img>
           <img className ="img-fluid services-pics" src="https://agendigo.herokuapp.com/images/pics-categories.jpg"></img>
    </div>
    
    <Link to={`/cities/${city}/activities`}>
   <button className="back">Retour</button>
    </Link>
  </div>
</div>





</section>
  );
 };


  export default Companies;
