import './App.css';
import Nav from "./nav"
import axios from 'axios';

// assets //
import logo from './assets/Bread-sparkle-bigcircle.svg';



const App = () => {
  
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&health=vegan&health=vegetarian`;

  const getData = async () => {
    const result = await axios.get(url);
    console.log(result);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 onClick={getData}>RECI - V</h1>
          <h3>vegitarian and vegan recipes</h3>
        </div>
      </header>

      <div>
        <Nav />

        <div className='content'>
          {/* Recipe */}
          {/* Recipe */}
        </div>
      </div>
      
    </div>
  );
}

export default App;
