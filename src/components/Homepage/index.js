import Header from './Header';
import Discover from './Discover';
import Categories from './Categories';
import React, {useEffect} from 'react';

const Homepage = ({categories, ApiCategories, isConnected}) => {
    useEffect(
        ApiCategories
     , 
     [],
    );
return(
    <>
    <Header isConnected = {isConnected} />
    <Discover />
    <Categories categoriesList = {categories} />
    </>
  
  )
};
export default Homepage;
