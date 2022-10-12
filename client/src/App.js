import './App.css';
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import Home from './components/Home.jsx';
import LandingPage from './components/LandingPage.jsx'
import FormCreate from './components/FormCreate.jsx'
import Detail from './components/Detail.jsx'


function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
    <Route exact path='/' ><LandingPage/></Route>
    <Route  path='/home' component={ Home } />
    <Route  path='/create' component={ FormCreate } />
    <Route  path='/detail/:id' component={ Detail } />
    </Switch>
 
    </div>
    </BrowserRouter>
  );
}

export default App;
