import { Link } from 'react-router-dom';
import localizePrice from '../../service/toLocale';
import { useSelector } from 'react-redux';
import s from './NavBar.module.css';

export default function NavMenu() {
  const orders = useSelector(state => state.orders);

  const total = orders =>
    orders.reduce((total, order) => total + order.price, 0);

  const totalPrice = total(orders);

  return (
    <nav className={s.nav}>
      <div>LOGO</div>
      <Link to="/">Home</Link>
      <div>
        <h2>{localizePrice(totalPrice)} </h2>
        <ul className={s.cartList}></ul>
      </div>
    </nav>
  );
}
