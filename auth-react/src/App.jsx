import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './components/Admin';
import {auth} from './firebase';
import { useEffect, useState } from 'react';


function App() {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if(user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser!== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser}/>
      <Switch>
        <Route exact path='/'>
          inicio...
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        
      </Switch>
    </div>
    </Router>
   
  ) : (
    <p>Cargando</p>
  )
}

export default App;
