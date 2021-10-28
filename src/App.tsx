import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/_Layout';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/recipes/:id'>
            <RecipeDetail />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
