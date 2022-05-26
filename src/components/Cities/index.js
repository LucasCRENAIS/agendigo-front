import toulon from '../../assets/villes/toulon.jpg';
import React, {useEffect} from 'react';
import './cities.css';
import { Link } from 'react-router-dom';
const Cities = ({cities, ApiCities}) =>

{
    
    useEffect(
       ApiCities
    , 
    [],
  );
 return (
     
<section className="cities">
<div className="container">
    <div className="title mb-5">
        <h6>Le choix de ma ville</h6>
        <h2>Sélectionnez la <span className="green-word">ville</span> de votre choix<br></br>
            pour accéder à tous nos services</h2>
    </div>



    <div className="row">
{

    cities.map((city) =>{
      const jsxDirectory =(
    <div className="col-md-3">
        <div className="cities-card">
    <Link to={`/cities/${city.city}/activities`}> 
            <img className="img-fluid img-cities" src={city.image} alt=""></img>
            <div className="city">
                <p>Découvrez tous nos services<br></br>
                    sur <span>{city.city}</span></p>
            </div>
            </Link>
        </div>
    </div>

    );
    return jsxDirectory;
    })
  }
  </div>
  <div className="my-5 text-center">
<a className="cities-more" href="#">Voir plus de villes</a>
</div>
</div>
</section>
  );
 };


  export default Cities;
