
import { ref, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { db, auth} from "../../firebase";


const SavedRecipe = ({ rid, recipe }) => {

   const user = auth.currentUser;
   const navigate = useNavigate();

   const deleteRecipe = () => {
         console.log("removing recipe");
         console.log(rid);
         const reff = ref(db, 'user/' + user.uid + "/recipes/" + rid);
         remove(reff);
         navigate("/reci-v/saved"); 
   };

   return (
      <div className="recipe">
         <a href={recipe["url"]} target="_blank" rel="noopener noreferrer">
            <div className="black-gradient">
               <h5>{recipe["label"]}</h5>
            </div>
            <div className="saved-image"></div>
         </a>
         <button className="tooltip" data-tooltip="delete" data-text="-" onClick={deleteRecipe}>-</button>
      </div>
   );
};

export default SavedRecipe;
