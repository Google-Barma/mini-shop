import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OrderList from '../OrderList/OrdersList';
import { isOpenOrder } from '../../redux/product/product-action';
import s from './Order.module.css';

export default function Order() {
  const dispatch = useDispatch();

  return (
    <div className={s.orderWrap}>
      <OrderList />
      <div className={s.controls}>
        <NavLink
          type="button"
          className={s.button}
          to="/cretify"
          onClick={() => isOpenOrder(false)}
        >
          Go to checkout
        </NavLink>
        <button
          className={s.button}
          type="button"
          onClick={() => dispatch(isOpenOrder(false))}
        >
          exit
        </button>
      </div>
    </div>
  );
}
