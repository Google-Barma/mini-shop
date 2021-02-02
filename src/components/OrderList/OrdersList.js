import { useSelector, useDispatch } from 'react-redux';
import s from './OrdersList.module.css';
import { deleteOrder } from '../../redux/product/product-action';
import { getOrders } from '../../redux/product/product-selectors';
import toLocale from '../../service/toLocale';

export default function OrderList() {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {orders.map(({ color, price, amount, id, smth }) => (
        <li key={id} className={s.item}>
          <div
            className={s.color}
            style={{ backgroundColor: `${color}` }}
          ></div>
          <span className={s.amount}>amount: {amount}</span>
          <span className={s.price}>price: {toLocale(price)}</span>
          <span className={s.smth}>smth: {toLocale(smth)}</span>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(deleteOrder(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
