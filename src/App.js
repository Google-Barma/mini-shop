import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavMenu from './components/AppBar/NavMenu';
import CardView from './views/CardView';
import HomeView from './views/HomeView';
import OrdersList from './components/OrderList/OrdersList';
import { getOrders } from './redux/product/product-selectors';

function App() {
  const orders = useSelector(getOrders);

  return (
    <div className="App">
      <NavMenu />
      {orders.length > 0 && <OrdersList />}
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/card:id" component={CardView} />
      </Switch>
    </div>
  );
}

export default App;
