import logo from '../../assets/logo_agendigo.svg';
import avatarUser from '../../assets/avatar-user.jpg';
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({isConnected, username, disconnect, login}) => {

return (
  <>
  <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
          <Link to="/"  className="navbar-brand"><img className="logo img-fluid" src={logo} alt=""></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Accueil</Link>
                </li>
                <li className="nav-item">
                <Link to="/cities"  className="nav-link" >Nos services</Link>
                </li>
                {
                  !isConnected && 
                  <>
                    <li className="nav-item">
                    <Link to="/login" ><button type="button" className="btn btn-light">Connexion</button></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/signin" ><button type="button" className="btn btn-primary">Inscription</button></Link>
                    </li>
                  </>
                }
                {
                  isConnected && 
                  <>
                  
      
                  <li className="nav-item nav-link" href="#">{login.connectedUser.data_public.customer_firstname} {login.connectedUser.data_public.customer_lastname}</li>
                  <li className="nav-item dropdown">
                  
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={avatarUser} className="img-fluid rounded float-end avatar-user" alt="user-avatar"></img>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Tableau de Bord</a></li>
            <li><a className="dropdown-item" href="#" onClick={disconnect}>D??connexion</a></li>
          </ul>
        </li>
                 
                  </>
                }

              </ul>
            </div>
          </div>
    </nav>
</header>
</>
  );
              }


  export default Navbar;
