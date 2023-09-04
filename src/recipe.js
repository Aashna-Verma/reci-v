import "./recipe.css";
import saveIcon from "./assets/modIcons/save.svg";
import addIcon from "./assets/modIcons/add.svg";
import { useNavigate } from "react-router-dom";
import { ref, push } from "firebase/database";
import { db, auth } from "./firebase";

const Recipe = ({ recipe }) => {

   const navigate = useNavigate();
   const user = auth.currentUser;
   const { label, image, url, ingredients } = recipe.recipe;

   const saveRecipe = () => {
      if (user) {
         console.log("adding recipe");
         const reff = ref(db, 'user/' + user.uid + "/recipes");
         push(reff, {
            label: label,
            image: image,
            url: url,
            ingredients: ingredients
         });

      } else {
         alert("noone");
         navigate("/reci-v/my-account");
      }
   };

   const addIngredients = () => {
      console.log("nothing yet!");
   }

   return (
      <div className="recipe">
         <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="black-gradient">
               <h5>{label}</h5>
            </div>
            <img src={image} alt={label} />
         </a>
         <div className="mod-icons">
            <img src={addIcon} className="tooltip" data-tooltip="add" onClick={addIngredients} />
            <img src={saveIcon} className="tooltip" data-tooltip="save" onClick={saveRecipe}/>
         </div>
      </div>
   );
};

export default Recipe;