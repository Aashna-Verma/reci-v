import "./App.css";

// components //
import Nav from "./nav";
import Search from "./search";

// assets //
import logo from "./assets/Bread-sparkle-bigcircle.svg";

//  main app //
const App = () => {
   return (
      <div className="App">
         <header>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
               <h1>RECI - V</h1>
               <h3>vegitarian and vegan recipes</h3>
            </div>
         </header>

         <div>
            <Nav />

            <div className="content">
               <Search />
            </div>
         </div>
      </div>
   );
};

export default App;
