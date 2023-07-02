import "./App.css";

// components //
import Nav from "./nav/nav";
import Search from "./pages/search/search";
import Login from "./pages/account/login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// assets //
import logo from "./assets/Bread-sparkle-bigcircle.svg";

//  main app //
const App = () => {
   return (
      <Router>
      <div className="App">
         <header>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
               <h1>RECI - V</h1>
               <h3>vegetarian and vegan recipes</h3>
            </div>
         </header>

         <div>
            <Nav />

            <div className="content">
               
                  <Routes>
                     <Route exact path="/reci-v" element={<Navigate to="./search" />} />
                     <Route path="reci-v/search" element={<Search />} />
                     <Route path="reci-v/my-account" element={<Login />} />
                  </Routes>
            </div>
         </div>
      </div>
      </Router>
   );
};

export default App;
