import { Link } from 'react-router-dom';
import localizePrice from '../../service/toLocale';
import { useSelector, useDispatch } from 'react-redux';
import s from './NavBar.module.css';
import { getOrders } from '../../redux/product/product-selectors';
import { isOpenOrder } from '../../redux/product/product-action';

export default function NavMenu() {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  const total = orders =>
    orders.reduce((total, order) => total + order.price, 0);

  const totalPrice = total(orders);

  return (
    <>
      <nav className={s.nav}>
        <Link to="/">LOGO</Link>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <div>
          <h2 onMouseEnter={() => dispatch(isOpenOrder(true))}>
            {localizePrice(totalPrice)}
          </h2>
          <ul className={s.cartList}></ul>
        </div>
      </nav>
    </>
  );
}
