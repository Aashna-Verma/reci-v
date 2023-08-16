import "./recipe.css";
import { useNavigate } from "react-router-dom";
import { ref, push} from "firebase/database";
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