import {Register} from './pages/Register';
import {Login} from './pages/Login';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return(
 <Router>
   <Switch>

   <Route path="/register"><Register/></Route>
   <Route path="/" exact><Login/></Route>

   <Route path="/dashboard"><Dashboard/></Route>
   </Switch>

 </Router>

  )
}

export default App;
