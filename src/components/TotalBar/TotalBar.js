import { useSelector } from 'react-redux';
import {
  getTotalAmount,
  getTotalPrice,
} from '../../redux/product/product-selectors';
import toLocale from '../../service/toLocale';
import s from './TotalBar.module.css';

export default function TotalBar() {
  const totalPrice = useSelector(getTotalPrice);
  const totalAmount = useSelector(getTotalAmount);

  return (
    <div>
      <span className={s.total}>Total: {totalAmount} pcs</span>
      <span className={s.price}>Price: {toLocale(totalPrice)}</span>
    </div>
  );
}
