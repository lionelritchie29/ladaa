import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/_Layout';
import AuthProvider from './contexts/AuthContext';
import ModalProvider from './contexts/ModalContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import MealPlan from './pages/MealPlan';
import RecipeDetail from './pages/RecipeDetail';
import SavedRecipe from './pages/SavedRecipe';
import { UsersService } from './services/api/users-service';
import { LocalStorageService } from './services/storage/LocalStorageService';

export default function App() {
  const usersService = new UsersService();
  const storageService = new LocalStorageService();

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider usersService={usersService} storageService={storageService}>
        <ModalProvider>
          <Layout>
            <Switch>
              <Route path="/auth/login">
                <Login usersService={usersService} storageService={storageService} />
              </Route>
              <Route path="/auth/register">
                <Register usersService={usersService} />
              </Route>
              <Route path="/recipes/:id">
                <RecipeDetail />
              </Route>
              <Route path="/saved-recipes">
                <SavedRecipe />
              </Route>
              <Route path="/meal-plan">
                <MealPlan />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Layout>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}
