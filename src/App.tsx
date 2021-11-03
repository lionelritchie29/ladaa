import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/_Layout';
import ModalProvider from './contexts/ModalContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import MealPlan from './pages/MealPlan';
import RecipeDetail from './pages/RecipeDetail';
import SavedRecipe from './pages/SavedRecipe';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ModalProvider>
        <Layout>
          <Switch>
            <Route path='/auth/login'>
              <Login />
            </Route>
            <Route path='/auth/register'>
              <Register />
            </Route>
            <Route path='/recipes/:id'>
              <RecipeDetail />
            </Route>
            <Route path='/saved-recipes'>
              <SavedRecipe />
            </Route>
            <Route path='/meal-plan'>
              <MealPlan />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </ModalProvider>
    </Router>
  );
}
