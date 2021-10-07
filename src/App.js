import { Route, Switch } from 'react-router-dom';

import AllToDo from './pages/AllToDo';
import Categories from './pages/Categories';
import NewToDo from './pages/NewToDo';
import MainNavigation from './components/layout/MainNavigation';

//import ToDo from "./components/ToDo";

function App() {

  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
        <AllToDo /> 
      </Route>
      <Route path='/NewToDo'>
        <NewToDo />
      </Route>
      <Route path='/Categories'>
        <Categories />
      </Route>
      </Switch>  
    </div>   
  );
}

export default App;
