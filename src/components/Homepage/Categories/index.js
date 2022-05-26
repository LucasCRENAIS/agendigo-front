import heartIcon from '../../../assets/heart-icon.svg';
import picsCategories from '../../../assets/pics-categories.jpg';
import iconeUsersCard from '../../../assets/card-user.svg';
import planningCategories from '../../../assets/planning-categories.svg';

import './categories.css';


const Categories = ({categoriesList}) => {
  console.log(categoriesList)

  return (
<div>
<div className="section categories">

     <div className="container">
       <div className="row">
         <div className="col-md-6 categories-list">
           <h6>Votre quotidien</h6>
           <h2>Vos catégories de<br></br> services disponibles</h2>

           {

            categoriesList.map((category) =>{
  const jsxDirectory =(
          <div className="category">
              <div  className=" cat"><img src={`http://ec2-3-88-101-18.compute-1.amazonaws.com/images/${category.image}`} alt=""></img><h3 className="title-cat-home">{category.name}</h3></div>
              <p className="mt-3">{category.description}</p>
          </div>
          );
    return jsxDirectory;
    })
  }
  
         </div>
         <div className="col-md-6">
           <div className="pics-categories">
             <img className="img-fluid" src={picsCategories} alt=""></img>
             <img className="img-fluid users-card-categories chat-pic" src={iconeUsersCard} alt=""></img>
             <img className="img-fluid planning-categories" src={planningCategories} alt=""></img>
           </div>
         </div>
       </div>
     </div>
</div>

</div>
  )};

  export default Categories;
