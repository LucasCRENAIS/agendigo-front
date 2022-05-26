import React from 'react';


import { Link } from 'react-router-dom';

const City = ({citiesListFromApi}) => (

    <div>
   
   
    {
    
        citiesListFromApi.map((directory) =>{
          const jsxDirectory =(
      
               <div>
               <Link to="/companiesList" className="nav-link active" aria-current="page" href="#"> Vos services à {directory.city}</Link>
                    <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, eius.</p>
    
            </div>
              );
          return jsxDirectory;
          })
        }
        </div>
    );

export default City