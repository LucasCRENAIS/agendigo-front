import toulon from '../../assets/activities/assurance.jpg';
import iconeChrono from '../../assets/chrono.svg';
import React, {useEffect} from 'react';
import './services.css';
import { Link } from 'react-router-dom';
import CompanyExampleMap from '../CompanyExample/CompanyExampleMap';


const Services = ({ApiServices, services,isConnected,markersData, idService,activity,manageAppointement, dates, appointmentmessageSucces, appointmentmessageError, isActive, manageSubmitAppointement, managehour, managedate, dateAppointment, hoursAppointment, manageCloseModal}) =>{
 
  useEffect(
    ApiServices
 , 
 [],
);
 return (
     <>
<section className="services">
<div className="container">
    <div className="title mb-5 col-md-6">
        <h6>Détails de la fiche pro</h6>
        <h2>Retrouvez tous les <span className="green-word">détails</span> de ce professionnel</h2>
    </div>



    <div className="row ">
    
    {
      services.map((service) =>{
  const jsxDirectory =(
    <>

    <div className="details-services py-3">
        <div className="services-card">
        <div style={{ backgroundImage: `url(https://agendigo.herokuapp.com/images/${service.company.image})` }} className="img-banner"></div>
            <div className="card-bottom row">
                    <div className="service col-md-8">
                        <h4>{service.company.company_name}</h4>
                        <p>{service.company.description}</p>
                        <Link to={`//www.google.com/maps/place/${service.company.address}+${service.company.postcode}+${service.company.city}/`} target="_blank" className="link-map">{service.company.address} {service.company.postcode} {service.company.city}</Link>
                    </div>
                    <div className="col-md-4 service">
                    <div className="rating ">
                    <div className="rating-holder">
                    {
  service.ratings.map((ratings) =>{
  const jsxDirectory =(
    <div className="c-rating c-rating--small" data-rating-value={ratings.stars}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
    );
    return jsxDirectory;
    })
  }
 
  </div>
  
                    </div>
         <div className="avis"><a href="#">52 avis</a></div>
         </div>
                </div>
            </div>
            </div>
  
  <div className="row infos-services py-5 ">

<div className="col-md-8 p-4">
<div className="py-4">
<h5>Nos services</h5>
</div>

{
      service.services.map((sub) =>{
  const jsxService =(
    <>
  <div className="services-details row my-3">
    <div className="service-name col-md-4">
  <h5>{sub.name}</h5>
  <Link  className="btn-more" role="button" aria-expanded="false" aria-controls="collapseExample" data-bs-toggle="collapse" to={`#collapseExample${sub.id}`}>Voir le détail du service</Link>
    
    </div>
    <div className="service-price col-md-4 text-center">
      <span>{sub.price}€</span>
    </div>
    {
      isConnected &&
    <div className="button-rdv-details col-md-4">
        <li className="nav-item">
        <button  onClick={(event) => {
        event.preventDefault();
        const idService = sub.id;
        manageAppointement(idService);
        }
      } type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModalCenter${sub.id}`}>Prendre un RDV </button>     
        </li>
    </div>
  }
  {
    !isConnected &&
  <>
  <div className="button-rdv-details col-md-4">

        <li className="nav-item">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${sub.id}`}>
  Prenez un RDV
</button>
   </li>
    </div>
</>
  }

{/* MODAL NON CONNECTE*/}

  <div className="modal fade" id={`exampleModal${sub.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content unconnected">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Vous devez être connecté pour prendre un RDV</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="py-3">Afin de réserver un créneau horaire pour le service <span className ="blue-word">{sub.name}</span>.Vous devez posséder un compte utilisateur. Veuillez vous inscrire ou vous connecter</p>
      <Link onClick={() => window.location.href="/login"} ><button type="button" className="btn btn btn-light mx-3">Se connecter</button></Link>
      <Link onClick={() => window.location.href="/signin"}><button type="button"  className="btn btn-primary mx-3">S'inscrire</button></Link>
      </div>
    </div>
  </div>
</div>



    <div className="collapse" id={`collapseExample${sub.id}`}>
  <div className="card-body">
  <hr></hr>
  <span className ="blue-word"> Description :</span> {sub.description} <br></br>
  <span className ="green-word">Durée :</span> {sub.duration} min <br></br>
  <p className="py-2">Si vous souhaitez accéder à ce service veuillez cliquer sur le bouton " Prendre un RDV ".</p>
  </div>
</div>
  </div>

{/* MODAL */}

  
  <div className="modal fade" id={`exampleModalCenter${sub.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog  modal-dialog-centered" role="document" id="appointmentForm">
      <div className="modal-content">
        <div className="modal-header">
 
          <h5 className="modal-title" id="exampleModalLongTitle">Prenez Votre RDV pour : <br></br> <span className ="green-word">"{sub.name}"</span></h5>
          <button onClick ={() => { manageCloseModal()} } type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body text-center">
        {
        dates.map((date) => {
            if(date.hours =='Fermé'){
                 date.date ='Fermé';
               }
          return(
               <div className="dates" key={date.date}>
               <div className="dates-top closed">{date.date}</div>
			   {
          <div className="hoursAppointement py-3">
          {
			   date.hours.filter(
					(hour) => hour != 'Non disponible' && hour != 'Fermé'
				)
				.map(
					(hour) => <div className={hour === hoursAppointment && date.date === dateAppointment ? "hours-btn active" : "hours-btn"} value={hour} onClick ={() => { managehour('hours', hour); managedate('date', date.date)} } key={hour}><span>{hour}</span></div>
				)
			   }
         </div>
         }<hr></hr>
             </div>
               )   

             
           }
      )
           }
      </div>
        <div className="modal-footer mx-auto">

        <form  onSubmit={(event) => {
          event.preventDefault();
          const idService = sub.id;
          manageSubmitAppointement(idService);
          
        }
      }>
          <button type="submit" className="btn btn-primary" >Valider mon RDV</button>
          </form><br></br>
          {
  appointmentmessageSucces &&
  <>
 
        <div className="modal-body check">
        <div className="alert alert-success" role="alert">{appointmentmessageSucces}</div>    
        </div>
 

    </>
}<br></br>
{
  appointmentmessageError &&
  <>
 
        <div className="modal-body check">
        <div className="alert alert-danger" role="alert">{appointmentmessageError}</div>    
        </div>
 

    </>
}


        </div>
      </div>
    </div>
  
  {/* MODAL CHECK */}


  </div>


					


  </>
            );
    return jsxService;
    })
  }
 

</div>

    
<div className="col-md-4 horaires p-4">
  <h5 className=" hours-title">Nos horaires d'ouvertures</h5>
  <img className="chrono" src="https://agendigo.herokuapp.com/images/chrono.svg"></img>
<div className="Open-hours row  ">

<div className="days col-4 ">
<h6>Jours</h6>
{
      service.days.map((day) =>{
  const jsxDays =(
    <>
    <hr></hr>
  <li className="day">{day.week_days}</li>
  </>
            );
    return jsxDays;
    })
  }
 
</div>

<div className="hours col-4">
<h6>Matin</h6>

{
  
  service.days.map((day) =>{
    if (day.am_opening == '00:00'){
      day.am_opening = 'Fermé';
    }
    if (day.pm_closing == '00:00'){
      day.pm_closing= 'Fermé';
    }
  const jsxDays =(
    
    <>
    
    <hr></hr>
    <div id="hourtest">
    <li className="hour" ><span>{day.am_opening}</span> - <span>{day.am_closing}</span></li>
    </div>
    </>
            );
            return jsxDays;
    })
    
  }
</div>
<div className="hours col-4">
<h6>Après-midi</h6>

{
  service.days.map((day) =>{
  const jsxDays =(
    <>
    <hr></hr>
    <li className="hour"><span>{day.pm_opening}</span> - <span>{day.pm_closing}</span></li>
  </>
            );
            return jsxDays;
      })
  }
</div>
</div>
</div>
</div>
 <>
    <CompanyExampleMap companyData ={service} markersData={markersData}/>
    </>
<Link to={`/cities/${service.company.city}/activities/${service.activity}/list`}>

   <button className="back">Retour</button>
    </Link>
   
    </>
    
            );
    return jsxDirectory;
   
    })
  
  }
 
  
  </div>
</div>
</section>


</>
  );
 };


  export default Services;

