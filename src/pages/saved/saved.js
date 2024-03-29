import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import SavedRecipe from "./savedRecipe";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { auth } from "../../firebase";

const Saved = () => {
   const navigate = useNavigate();
   let recipes = {};

   const dbRef = ref(getDatabase());
   if (auth.currentUser != null) {
      onValue(child(dbRef, `user/${auth.currentUser.uid}/recipes`), (snapshot) => {

         recipes = snapshot.val();
      });
   } else {
      alert("noone");
      navigate("/reci-v/my-account");
   }

   return (
      <div>
         <h2>Saved</h2>
         <div className="recipes saved-recipes"
         style={{'height':` ${Object.keys(recipes).length <= 8 ? '50%' : 'calc(100% - 105px)'}`}}>
            {Object.keys(recipes).map(recipe => <SavedRecipe key={uuidv4()} rid = {recipe} recipe={recipes[recipe]} />)}
         </div>
      </div>
   );
};

export default Saved;
