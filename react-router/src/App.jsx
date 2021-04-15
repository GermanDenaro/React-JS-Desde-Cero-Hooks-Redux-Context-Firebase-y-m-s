import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import User from './components/User'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
          <Link to='/' className='btn btn-dark'>
            Inicio
          </Link>
          <Link to='/Nosotros' className='btn btn-dark'>
            Nosotros
          </Link>
          <NavLink to='/Contacto' className='btn btn-dark'>
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Switch>
          <Route path='/nosotros/:id'>
            <User/>
          </Route>
          <Route path='/contacto'>
            <Contacto/>
          </Route>
          <Route path='/nosotros'>
            <Nosotros/>
          </Route>
          <Route exact path='/'>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
