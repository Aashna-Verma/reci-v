import './App.css';

// assets //
import logo from './assets/Bread-sparkle-bigcircle.svg';
import search from './assets/search.svg';
import saved from './assets/saved.svg';
import list from './assets/list.svg';
import account from './assets/account.svg';
import settings from './assets/settings.svg';


function App() {
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
        <form action=''>
          <div>
            <input type="radio" id="search" name="nav" value="search"/>
            <img src={search} className="search-logo" alt="search logo" />
            </div>
          <div>
            <input type="radio" id="saved" name="nav" value="saved" />
            <img src={saved} className="saved-logo" alt="saved logo"/>
            </div>
          <div>
            <input type="radio" id="list" name="nav" value="list" />
            <img src={list} className="list-logo" alt="list logo"/>
            </div>
          <div></div>
          <div>
            <input type="radio" id="account" name="nav" value="account" />
            <img src={account} className="account-logo" alt="account logo"/>
            </div>
          <div>
            <input type="radio" id="settings" name="nav" value="settings" />
            <img src={settings} className="settings-logo" alt="settings logo"/>
            </div>
          </form>

        <div className='content'>

        </div>
      </div>
      {/* Recipe */}
      {/* Recipe */}
    </div>
  );
}

export default App;
