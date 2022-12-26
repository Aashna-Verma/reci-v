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
        <nav>
          <ul>
            <li><a><img src={search} className="Search-logo" alt="Search logo" stroke="#FFF" /></a></li>
            <li><a><img src={saved} className="Saved-logo" alt="Saved-logo" /></a></li>
            <li><a><img src={list} className="List-logo" alt="List-logo" /></a></li>
            <li><a></a></li>
            <li><a><img src={account} className="Account-logo" alt="Account-logo" /></a></li>
            <li><a><img src={settings} className="Settings-logo" alt="Settings-logo" /></a></li>
          </ul>
        </nav>

        <div className='content'>

        </div>
      </div>
      {/* Recipe */}
      {/* Recipe */}
    </div>
  );
}

export default App;
