import React, { useState } from "react";
import "./search.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../../recipe";

const Search = () => {
   const [query, setQuery] = useState("");
   const [recipes, setRecipes] = useState([]);
   const [count, setCount] = useState();

   const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
   const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

   const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan&health=vegetarian&random=true`;

   const getData = async () => {
      const result = await axios.get(url);
      setRecipes(result.data.hits);
      setCount(result.data.count);
      console.log(result);
      setQuery("");
   };

   const onChange = (e) => {
      setQuery(e.target.value);
   };

   const onSubmit = (e) => {
      e.preventDefault();
      getData();
   };

   console.log(count <= 8);

   return (
      <div>
         <form id="recipeSearch" onSubmit={onSubmit}>
            <input
               type="text"
               placeholder="food"
               autocomplete="off"
               onChange={onChange}
               value={query}
            />
            <input className="colored-btn" type="submit" value="search" alt="search button" />
         </form>
         <div className="recipes"
         style={{'height':` ${count <= 8 ? 'auto' : 'calc(100% - 105px)'}`}}>
            {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
         </div>
      </div>
   );
};

export default Search;
