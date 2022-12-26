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

      <nav>
        <div className='main3'>
          <img src={search} className="Search-logo" alt="Search logo" />
          <img src={saved} className="Saved-logo" alt="Saved-logo" />
          <img src={list} className="List-logo" alt="List-logo" />
        </div>
        <div className='personal'>
          <img src={account} className="Account-logo" alt="Account-logo" />
          <img src={settings} className="Settings-logo" alt="Settings-logo" />
        </div>
      </nav>

      {/* Recipe */}
      {/* Recipe */}
    </div>
  );
}

export default App;
