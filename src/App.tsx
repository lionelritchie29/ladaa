import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/_Layout';
import AuthProvider from './contexts/AuthContext';
import ModalProvider from './contexts/ModalContext';
import ToastProvider from './contexts/ToastContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import MealPlan from './pages/MealPlan';
import RecipeDetail from './pages/RecipeDetail';
import SavedRecipe from './pages/SavedRecipe';
import LocalRecipeService from './services/in-memory/recipe-service';
import { UsersService } from './services/api/users-service';
import { LocalStorageService } from './services/storage/LocalStorageService';
import MealPlanService from './services/api/meal-plan-service';

export default function App() {
  const usersService = new UsersService();
  const storageService = new LocalStorageService();
  const localRecipeService = new LocalRecipeService();
  const mealPlanService = new MealPlanService();

  return (
    <Router>
      <ScrollToTop />
      <AuthProvider usersService={usersService} storageService={storageService}>
        <ToastProvider>
          <ModalProvider>
            <Layout>
              <Switch>
                <Route path='/auth/login'>
                  <Login
                    usersService={usersService}
                    storageService={storageService}
                  />
                </Route>
                <Route path='/auth/register'>
                  <Register usersService={usersService} />
                </Route>
                <Route path='/recipes/:id'>
                  <RecipeDetail
                    recipeService={localRecipeService}
                    storageService={storageService}
                    mealPlanService={mealPlanService}
                  />
                </Route>
                <Route path='/saved-recipes'>
                  <SavedRecipe />
                </Route>
                <Route path='/meal-plan'>
                  <MealPlan recipeService={localRecipeService} />
                </Route>
                <Route path='/'>
                  <Home recipeService={localRecipeService} />
                </Route>
              </Switch>
            </Layout>
          </ModalProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  );
}
