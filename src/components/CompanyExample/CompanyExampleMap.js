import React, {useEffect, useState} from 'react';

import Map from './Maps';

import L from "leaflet";
/* import {company} from './index'; */

import './companyExample.css'

import PropTypes from 'prop-types';
import CompanyExample from '../../containers/CompanyExample';

class CompanyExampleMap extends React.Component {

        /* state = {
          
          markersData: [
            { latLng: [48.856614, 2.3522219], title: 1 }
          ]
        }; */
        constructor(props) {
          
          console.log('je suis dans le constructor', props);
          super(props);
       
          const location = (this.props.companyData.location[0]);
         
          console.log('la location ', this.props.companyData.location);
          const longLatSplit = location.split(', ');
          const latitude = longLatSplit[0];
          const longitude = longLatSplit[1];
          const lati = parseFloat(latitude);
          const long = parseFloat(longitude);
          console.log('props+lati', this.props.lati);
          this.state = { 
            markersData: [
              { latLng: [lati, long], title: 1 }
            ]};
         
      }
   
    /*     addMarker = () => {
          const { markersData } = this.state;
          console.log(this.state);
          const lastMarker = markersData[markersData.length - 1];
      
          this.setState({
            markersData: [
              ...markersData,
              {
                title: +lastMarker.title + 1,
                latLng: {
                  lat: lastMarker.latLng.lat + 0.0001,
                  lng: lastMarker.latLng.lng + 0.0001,
                }
              }
            ]
          });
        }; */
    
        render(){
      
         const { markersData } = this.state;
            return(
               <div>
                  <Map markersData={markersData}/>
               </div>
           );
      
    
}

}

/* CompanyExample.propTypes = {
    companyData: PropTypes.arrayOf(
    PropTypes.shape({
    company_name:PropTypes.string.isRequired
    }).isRequired
    ).isRequired

}; */

export default CompanyExampleMap;