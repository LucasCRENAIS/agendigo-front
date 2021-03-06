import React from 'react';
import './app.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../../containers/Homepage';
import Navbar from '../../containers/Navbar';
import Footer from '../Footer';
import Errorpage from '../Errorpage';
import { useEffect } from 'react';
import Login from '../../containers/Login';
import SignIn from '../../containers/Signin';
import Cities from '../../containers/Cities';
import Activities from '../../containers/Activities';
import Companies from '../../containers/Companies';
import Services from '../../containers/Services';
import Contact from '../../components/Contact';


  const App = ({ getTokenLocalStorage, cities, ApiCities,ApiCompanies, companies}) =>  {
useEffect(
  getTokenLocalStorage
   , 
  [],
);


  return(
    <div className="App">
    <Navbar />  
    <Switch>
    <Route exact path="/">
    <Homepage />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signin">
      <SignIn />
    </Route>
    <Route exact path="/cities">
      <Cities />
    </Route>
  

<Route exact path="/cities/:city/activities" render={({match}) => {

    // on peut récupérer les params dynamiques via l'objet match
    const { city } = match.params;
    // on passe ensuite ses params à notre container
    return(
    <Activities city={city}/>
    )
  }} />


    <Route exact path="/cities/:city/activities/:name/list" render={({match}) => {
       
       const { city, name } = match.params;
       return (
      <Companies city={city} name={name}/>
      )
    }} />
  
  <Route exact path="/company/:id/services" render={({match}) => {
       const {id} = match.params;
       return (
      <Services id={id}  />
      )
    }} />
  
  <Route exact path="/contact">
    <Contact />
    </Route>
  
   
   

    <Route path="/" component={() => <Errorpage />} />
    </Switch>
    <Footer />
    </div>
  ) 
  };

export default App;
