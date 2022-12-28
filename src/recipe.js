import "./recipe.css";

const Recipe = ({recipe}) => {
   const {label, image, url, ingreedients} = recipe.recipe
   return (
      <div className="recipe">
         
         
         <a href={url} target="_blank" rel="noopener noreferrer">
            <h5>{label}</h5>
            <img src={image} alt={label} />
         </a>
         <button>+</button>
      </div>
   );
};

export default Recipe;