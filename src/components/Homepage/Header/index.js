import calendarHeader from '../../../assets/home_calendar.svg';
import iconeChrono from '../../../assets/chrono.svg';
import iconeUsers from '../../../assets/users.svg';
import iconeUsersCard from '../../../assets/card-user.svg';
import iconeAgenda from '../../../assets/calendar-icon.svg';
import React from 'react';
import './header.css';

const Header = ({isConnected}) => (
  <div>
<section className="head-intro">
<div className="container home">

<div className="row">
  <div className="col-md-6 head_title">
      <h1>Facilitez la gestion <br></br>de vos Rendez-vous</h1>
      <p className="mb-3">Gérez votre agenda personnel et professionnel en un simple clic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          In quod explicabo molestias facilis animi voluptatem error!</p>
          { !isConnected &&
      <a href="signin"><button type="button" className="sign-in btn btn-primary">Inscrivez-vous</button></a>
    }
      <a href="#discover"><button type="button" className="concept btn btn-light">Notre concept</button> </a>
  </div>
  <div className="col-md-6 calendar">
      <img  className="img-fluid " src={calendarHeader} alt=""></img>
      <img  className="img-fluid icon chrono animate__bounceIn" src={iconeChrono} alt=""></img>
      <img  className="img-fluid  icon users animate__bounceIn " src={iconeUsers} alt=""></img>
      <img  className="img-fluid  hidden-xs users-card animate__animated animate__fadeInUp " src={iconeUsersCard} alt=""></img>
      <img  className="img-fluid  icon calendar-icon animate__bounceIn" src={iconeAgenda} alt=""></img>
  </div>
</div>
</div>
<div className="mouse"></div>
<p className="text-scroll text-center">Scrollez vers le bas</p>
</section>
</div>
  );


  export default Header;