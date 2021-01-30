import { useSelector, useDispatch } from 'react-redux';
import s from './OrdersList.module.css';
import { deleteOrder } from '../../redux/product/product-action';

export default function OrderList() {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  return (
    <div className={s.listWrap}>
      <ul className={s.list}>
        {orders.map(({ color, price, amount, id }) => (
          <li key={id} className={s.item}>
            <div
              className={s.color}
              style={{ backgroundColor: `${color}` }}
            ></div>
            <span>price: {price}</span>
            <span>amoun: {amount}</span>
            <button type="button" onClick={() => dispatch(deleteOrder(id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
