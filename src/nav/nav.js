import search from "../assets/search.svg";
import saved from "../assets/saved.svg";
import list from "../assets/list.svg";
import account from "../assets/account.svg";
import settings from "../assets/settings.svg";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
   return (
      <ul id="navigationForm" >
         <li className="bar tooltip" data-tooltip="search" >
            <div id="search" name="nav" value="search" >
               <Link to="reci-v/search" ><img src={search} className="search-logo" alt="search logo" /></Link>
            </div>
         </li>
         
         <li className="bar tooltip" data-tooltip="saved recipies">
            <div id="saved" name="nav" value="saved">
               <Link to="reci-v/saved"><img src={saved} className="saved-logo" alt="saved logo" /></Link>
            </div>
         </li>

         <li className="bar tooltip" data-tooltip="ingredients list">
            <div id="list" name="nav" value="list">
               <Link to="reci-v/ingredient-lists"><img src={list} className="list-logo" alt="list logo" /></Link>
            </div>
         </li>

         <div></div>

         <li className="bar tooltip" data-tooltip="my account">
            <div id="account" name="nav" value="account">
               <Link to="reci-v/my-account"><img src={account} className="account-logo" alt="account logo" /></Link>
            </div>
         </li>

         <li className="bar tooltip" data-tooltip="settings">
            <div id="settings" name="nav" value="settings">
               <Link to="reci-v/settings"><img src={settings} className="settings-logo" alt="settings logo" /></Link>
            </div>
         </li>
         
      </ul>
   );
};

export default Nav;
