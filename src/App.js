import './App.css';
import {BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';


function App() {

  const isActiveStyle = ({isActive}) => ({
    color : isActive ? 'green': 'blue'
  })

  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink end  to="/" style={isActiveStyle} >Home</NavLink>
          </li>
          <li>
            <NavLink end  to="/about" style={isActiveStyle} >About</NavLink>
          </li>
          <li>
            <NavLink end  to="/contacts" style={isActiveStyle}>Contacts</NavLink>
          </li>
        </ul>
        <hr />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={     <About />}/>
          <Route path="/contacts" element={ <Contacts />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
