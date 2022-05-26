import logo from '../../assets/logo_agendigo.svg';
import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () =>
{
  const now = new Date();
  const year = now.getFullYear();
 return (
  <div>
<footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <img className="logo img-fluid w-50" src={logo} alt=""></img>
          </div>
          <div className="col-md-4 text-center">
            <span>Agendigo - {year} </span>
          </div>
          <div className="col-md-4 d-flex footer-menu">
           
                  <a className="nav-link active" aria-current="page" href="#">Mentions légales</a>
                  <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
</div>
  );
 };


  export default Footer;
