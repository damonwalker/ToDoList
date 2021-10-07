import { Route, Switch } from 'react-router-dom';

import AllTasks from './pages/AllTasks';
import Categories from './pages/Categories';
import NewTask from './pages/NewTask';
import Layout from './components/layout/Layout';

//import ToDo from "./components/ToDo";

function App() {

  return (
    <Layout>
      
      <Switch>
      <Route path='/' exact>
        <AllTasks /> 
      </Route>
      <Route path='/NewTask'>
        <NewTask />
      </Route>
      <Route path='/Categories'>
        <Categories />
      </Route>
      </Switch>  
    </Layout>   
  );
}

export default App;
