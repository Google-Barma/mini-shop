import NavMenu from './components/AppBar/NavMenu';
import CardView from './views/CartView';
import HomeView from './views/HomeView';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/card/:id" component={CardView} />
      </Switch>
    </div>
  );
}

export default App;
