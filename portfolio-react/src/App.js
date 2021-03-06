/* Main Imports*/
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Page Imports */
import Homepage from './pages/Homepage';
import Items from './pages/Items';
import Stores from './pages/Stores';
import Weather from './pages/Weather';

/* Component Imports */
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='App'>
        <Router>
          <header>
            <h1>SPA built with React</h1>
          </header>
          <Tabs />
          <main>
            <Route path='/' exact>
              <Homepage />
            </Route>
            <Route path='/Items'>
              <Items />
            </Route>
            <Route path='/Weather'>
              <Weather />
            </Route>
            <Route path='/Stores'>
              <Stores />
            </Route>
          </main>
        </Router>
    </div>
  );
}

export default App;
