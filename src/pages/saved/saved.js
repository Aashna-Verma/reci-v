import {v4 as uuidv4} from "uuid";
import Recipe from "../../recipe";

const Saved = () => {


   return (
      <div>
         <div id="recipes">
            {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)}
         </div>
      </div>
   );
};

export default Saved;
