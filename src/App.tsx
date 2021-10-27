import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/_Layout';
import Home from './pages/home/Home';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/test'>
            <div>Test hehe</div>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
