import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavMenu from './components/AppBar/NavMenu';
import CardView from './views/CardView';
import CretifyView from './views/CretlifyView';
import HomeView from './views/HomeView';
import { getIsOpen, getOrders } from './redux/product/product-selectors';
import Order from './components/Order/Order';

function App() {
  const orders = useSelector(getOrders);
  const isOrderOpen = useSelector(getIsOpen);

  return (
    <div className="App">
      <NavMenu />
      {orders.length > 0 && isOrderOpen && <Order />}
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/card:id" component={CardView} />
        <Route path="/cretify" component={CretifyView} />
      </Switch>
    </div>
  );
}

export default App;
