import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
      <Switch>
        <Route exact path='/'>
          inicio...
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/admin'>
          admin...
        </Route>
        
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
