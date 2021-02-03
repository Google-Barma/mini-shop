import { useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import s from './CretifyOrder.module.css';
import OrderList from '../OrderList/OrdersList';
import useAuth from '../Hooks/useAuth';
import { getOrders } from '../../redux/product/product-selectors';
import TotalBar from '../TotalBar/TotalBar';

export default function CretifyOrder({ onOpenModal }) {
  const orders = useSelector(getOrders);
  const firebaseDatabase = firebase.database();
  const { authentication, logIn } = useAuth(firebase.auth);

  const sendOrder = (firebaseDatabase, orders, authentication) => {
    firebaseDatabase.ref('orders').push().set({
      name: authentication.displayName,
      email: authentication.email,
      order: orders,
    });
  };

  const confirmOrder = (firebaseDatabase, orders, authentication) => {
    sendOrder(firebaseDatabase, orders, authentication);

    onOpenModal(true);
  };

  return (
    <div className={s.orderWrap}>
      <OrderList />
      <TotalBar />
      <button
        className="button"
        type="button"
        onClick={() =>
          authentication
            ? confirmOrder(firebaseDatabase, orders, authentication)
            : logIn()
        }
      >
        Confirm order
      </button>
    </div>
  );
}
