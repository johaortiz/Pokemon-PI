import { Route } from 'react-router-dom';
import './App.css';
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import CreatePokemon from './components/CreatePokemon';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route path='/' component={NavBar}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/pokemon/:id' component={Cards}/>
      <Route exact path='/create' component={CreatePokemon}/>
      <Route exact path='/notFound' component={NotFound}/>
      
      {/* <Redirect from='*' to='/notFound'/> */}
    </div>
  );
}

export default App;
