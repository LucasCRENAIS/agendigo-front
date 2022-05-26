import Florian from '../../assets/team/Florian.jpg';
import Lucas from '../../assets/team/lucas.jpg';
import Hugo from '../../assets/team/hugo.jpg';
import Larry from '../../assets/team/larry.jpg';
import Florent from '../../assets/team/Florent.jpg';
import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {

  return(
 
<section className="contact ">
<div className="container">
    <div className="title my-5">
        <h6>Les développeurs de la plateforme</h6>
        <h2>Retouvez toute l'équipe d'<span className="green-word">Agendigo</span></h2>
    </div>




    <div className="row details-contact  ">

      <div className="col-md-2">
        <img className ="img-fluid" src={Florian}></img>
        <h4 className="devname">Florian</h4>
        <h6 className=" py-2">Lead Dev Front & Product Owner</h6>
        <a href="https://github.com/FlorianB83" target="_blank"><button className="btn btn-primary">Mon GitHub</button></a>
      </div>
     
      <div className="col-md-2">
          <img className ="img-fluid"  src={Hugo}></img>
          <h4 className="devname">Hugo</h4>
          <h6 className=" py-2">Scrum Master & Dev front</h6>
          <a href="https://github.com/HugoOgez0712" target="_blank"><button className="btn btn-primary">Mon GitHub</button></a>
        </div>

      <div className="col-md-2">
          <img className ="img-fluid"  src={Lucas}></img>
          <h4 className="devname">Lucas</h4>
          <h6 className=" py-2">Lead Développeur Back</h6>
          <a href="https://github.com/LucasCRENAIS" target="_blank"><button className="btn btn-primary">Mon GitHub</button></a>
        </div>
       
        <div className="col-md-2">
            <img className ="img-fluid"  src={Larry}></img>
            <h4 className="devname">Larry</h4>
            <h6 className=" py-2">Git Master & Développeur Back</h6>
            <a href="https://github.com/code-larry" target="_blank"><button className="btn btn-primary">Mon GitHub</button></a>
          </div>
      
       
      
            <div className="col-md-2">
                <img className ="img-fluid"  src={Florent}></img>
                <h4 className="devname">Florent</h4>
                <h6 className=" py-2">Git Master & Développeur Back</h6>
                <a href="https://github.com/Florent-2008" target="_blank"><button className="btn btn-primary">Mon GitHub</button></a>
              </div>
      
    </div>
   </div>
</section>


)

};


  export default Contact;
