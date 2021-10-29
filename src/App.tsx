import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/_Layout';
import ModalProvider from './contexts/ModalContext';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ModalProvider>
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
      </ModalProvider>
    </Router>
  );
}
