import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExtendedOrder } from '../../redux/product/product-action';
import s from './ProductInfo.module.css';
import toLocale from '../../service/toLocale';
import { Redirect } from 'react-router-dom';

export default function ProductInfo({ product }) {
  const [amountValue, setAmountValue] = useState(1);
  const [smthValue, setSmthValue] = useState(0);
  const dispatch = useDispatch();
  let { color, price, amount, smth, id } = product ? product : [];
  amount = amountValue;
  smth = smthValue;

  if (!product) return <Redirect to="/" />;

  return product ? (
    <div className={s.prodWrap}>
      <div
        className={s.color}
        style={{ backgroundColor: `${product.color}` }}
      ></div>
      <span className={s.price}>
        Price: {toLocale(amountValue * (product.price + smthValue))}
      </span>
      <form>
        <select
          className={s.select}
          name="toppings"
          id="toppings"
          onChange={({ target: { value } }) => setSmthValue(Number(value))}
        >
          <option value="0">please select</option>
          <option value="10">smth {toLocale(10)}</option>
          <option value="20">smth {toLocale(20)}</option>
          <option value="30">smth {toLocale(30)}</option>
        </select>
        <button
          type="button"
          onClick={() => setAmountValue(amountValue - 1)}
          disabled={amountValue <= 1}
        >
          -
        </button>
        <input
          className={s.numberInput}
          type="number"
          name="amount"
          id="amount"
          value={amountValue}
          onChange={({ target: { value } }) => setAmountValue(value)}
        />
        <button type="button" onClick={() => setAmountValue(amountValue + 1)}>
          +
        </button>
      </form>
      <button
        className="button"
        type="button"
        onClick={() =>
          dispatch(addExtendedOrder({ color, price, amount, smth, id }))
        }
      >
        add to cart
      </button>
    </div>
  ) : null;
}
