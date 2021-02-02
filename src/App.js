import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/AppBar/NavMenu';
import CardView from './views/CardView';
import HomeView from './views/HomeView';
import OrdersList from './components/OrderList/OrdersList';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <OrdersList />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/card:id" component={CardView} />
      </Switch>
    </div>
  );
}

export default App;
