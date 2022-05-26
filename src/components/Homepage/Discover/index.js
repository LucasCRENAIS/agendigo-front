import iconeRoad from '../../../assets/icone-road.svg';
import rdvOnline from '../../../assets/rdv-online.svg';
import historique from '../../../assets/historique.svg';
import planning from '../../../assets/planning.svg';
import avatarsUsers from '../../../assets/avatars-users-icons.svg';

import React from 'react';
import './discover.css';

const Discover = () => (
  <div>
   <section className="discover" id="discover">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h6>Découvrir</h6>
            <h2>Notre concept <br></br> De réservation en ligne</h2>
          </div>
          <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus condimentum feugiat. Vestibulum facilisis vulputate sagittis. Sed tincidunt efficitur semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>
        </div>
        <div className="card-discover">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="card">
                <img src={iconeRoad} alt="Services par villes"></img>
              </div>
              <h5>Trouvez tous vos services
                dans votre ville</h5>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={rdvOnline}alt="Rdv online"></img>
              </div>
              <h5>Prenez et gérer 
                facilement vos  RDV en ligne </h5>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={historique} alt="historique"></img>
              </div>
              <h5>Retrouvez tous 
                vos historiques de RDV</h5>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={planning} alt="planning"></img>
              </div>
              <h5>Gagnez du temps sur la gestion
                De votre planning</h5>
            </div>
          </div>
        </div>
      </div>
  
    </section>
    <div className="avatars-users container">
        <img src={avatarsUsers} alt="icones avatars users"></img>
      </div>
</div>
  );


  export default Discover;