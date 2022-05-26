import error from '../../assets/404-error.svg';
import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

const Errorpage = () =>
{
 return (
  <div>
<section className="error-404">
      <div className="container error">

              <img className=" img-fluid" src={error} alt="error 404"></img>
          </div>
          <li className="nav-item">
              <Link to="/" ><button type="button" className="btn btn-light">Retour à l'accueil</button></Link>
           </li>
    </section>
</div>
  );
 };


  export default Errorpage;
