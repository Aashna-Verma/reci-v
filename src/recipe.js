import "./recipe.css";
import {user} from "./firebase";

const Recipe = ({recipe}) => {
   const {label, image, url, ingredients} = recipe.recipe

   const saveRecipe = () => {
      if (user){
         alert(user);
      } else {
         alert("noone");
      }
   }

   return (
      <div className="recipe">
         <a href={url} target="_blank" rel="noopener noreferrer">
            <h5>{label}</h5>
            <img src={image} alt={label} />
         </a>
         <button className="tooltip" data-tooltip="add" data-text="+" onClick={saveRecipe}>+</button>
      </div>
   );
};

export default Recipe;