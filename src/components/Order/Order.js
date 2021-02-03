import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from '../OrderList/OrdersList';
import { isOpenOrder } from '../../redux/product/product-action';
import s from './Order.module.css';
import {
  getTotalAmount,
  getTotalPrice,
} from '../../redux/product/product-selectors';
import toLocale from '../../service/toLocale';

export default function Order() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const totalAmount = useSelector(getTotalAmount);

  return (
    <div className={s.orderWrap}>
      <OrderList />

      <div>
        <span className={s.total}>Total: {toLocale(totalAmount)}</span>
        <span className={s.price}>Price: {toLocale(totalPrice)}</span>
      </div>

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
