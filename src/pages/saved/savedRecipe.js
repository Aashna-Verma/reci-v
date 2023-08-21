
const SavedRecipe = ({recipe}) => {

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
