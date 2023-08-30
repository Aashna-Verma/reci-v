import axios from "axios";
import React, { useState } from "react";


const SavedRecipe = ({recipe}) => {

   const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
   const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

   const urlApi = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe["label"]}&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan&health=vegetarian&random=true`;

   const getData = async () => {
      const result = await axios.get(urlApi);
      const recipes = result.data.hits;
      
      console.log(result);
   };
   getData();

   return (
      <div className="recipe">
         <a href={recipe["url"]} target="_blank" rel="noopener noreferrer">
            <h5>{recipe["label"]}</h5>
            <img src={recipe["image"]} alt={recipe["label"]} />
         </a>
      </div>
   );
};

export default SavedRecipe;
