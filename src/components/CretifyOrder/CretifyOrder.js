import s from './CretifyOrder.module.css';
import OrderList from '../OrderList/OrdersList';

export default function CretifyOrder() {
  return (
    <div className={s.orderWrap}>
      <OrderList />
    </div>
  );
}
