import './App.css';
import {BrowserRouter,Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import LandingPage from './components/LandingPage.jsx'


function App() {

  return (
    <BrowserRouter>
    
    <div className="App">
    <Route exact path='/' ><LandingPage/></Route>
    <Route  path='/home' component={ Home } />
    
 
    </div>
    </BrowserRouter>
  );
}

export default App;
