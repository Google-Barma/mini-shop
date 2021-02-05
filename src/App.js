import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavMenu from './components/AppBar/NavMenu';
import CardView from './views/CardView';
import CretifyView from './views/CretlifyView';
import HomeView from './views/HomeView';
import { getIsOpen, getOrders } from './redux/product/product-selectors';
import Order from './components/Order/Order';
import useAuth from './components/Hooks/useAuth';
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

function App() {
  const orders = useSelector(getOrders);
  const isOrderOpen = useSelector(getIsOpen);

  const auth = useAuth(firebase.auth);

  return (
    <div className="App">
      <NavMenu {...auth} />
      {orders.length > 0 && isOrderOpen && <Order />}
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/card:id" component={CardView} />
        <Route path="/cretify" component={CretifyView} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
