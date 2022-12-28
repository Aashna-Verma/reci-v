import search from "./assets/search.svg";
import saved from "./assets/saved.svg";
import list from "./assets/list.svg";
import account from "./assets/account.svg";
import settings from "./assets/settings.svg";

import "./nav.css";

const Nav = () => {
   return (
      <form action="" id="navigationForm">
         <div>
            <input type="radio" id="search" name="nav" value="search" />
            <div className="bar">
               <div></div>
               <img src={search} className="search-logo" alt="search logo" />
            </div>
         </div>
         <div>
            <input type="radio" id="saved" name="nav" value="saved" />
            <div className="bar">
               <div></div>
               <img src={saved} className="saved-logo" alt="saved logo" />
            </div>
         </div>
         <div>
            <input type="radio" id="list" name="nav" value="list" />
            <div className="bar">
               <div></div>
               <img src={list} className="list-logo" alt="list logo" />
            </div>
         </div>
         <div></div>
         <div>
            <input type="radio" id="account" name="nav" value="account" />
            <div className="bar">
               <div></div>
               <img src={account} className="account-logo" alt="account logo" />
            </div>
         </div>
         <div>
            <input type="radio" id="settings" name="nav" value="settings" />
            <div className="bar">
               <div></div>
               <img
                  src={settings}
                  className="settings-logo"
                  alt="settings logo"
               />
            </div>
         </div>
      </form>
   );
};

export default Nav;
