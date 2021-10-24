import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/_Layout';
import Home from './pages/home/Home';

const people = [{ name: 'LL' }, { name: 'DX' }, { name: 'DZ' }];

export default function App() {
  const [selected, setSelected] = useState(people[0]);

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
