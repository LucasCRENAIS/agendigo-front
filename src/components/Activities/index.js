import React, {useEffect} from 'react';
import './activities.css';
import { Link } from 'react-router-dom';

const Activities = ({ApiActivities, activities, city}) =>{
console.log('coucou Activities');
    useEffect(
        ApiActivities
     , 
     [city],
   );
 
 return (
     
<section className="cities">
<div className="container">
    <div className="title mb-5">
        <h6>Le choix de mes services</h6>
        <h2>Sélectionnez le <span className="green-word">service</span> de votre choix<br></br>
            dans la ville de <span className="blue-word">{city}</span></h2>
    </div>



    <div className="row">
    {

activities.map((activity) =>{
  const jsxDirectory =(
    <div className="col-md-3">
        <div className="cities-card">
        <Link to={`/cities/${city}/activities/${activity.name}/list`}>
            <img className="img-fluid img-cities" src={`https://agendigo.herokuapp.com/images/${activity.image}`} alt=""></img>
            <div className="city">
                <p>Je souhaite accéder au <br></br>
                  service <span>{activity.name}</span></p>
            </div>
            </Link>
        </div>
    </div>
    );
    return jsxDirectory;
    })
  }
  <Link to={`/cities`}>
   <button className="back">Retour</button>
    </Link>

  </div>
</div>
</section>
  );
 };


  export default Activities;
