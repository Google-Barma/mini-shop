import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/product/product-action';
import s from './ProductInfo.module.css';

export default function ProductInfo({ product }) {
  const [amountValue, setAmountValue] = useState(1);
  const [smthValue, setSmthValue] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCard = product => {
    product.amount = amountValue;
    product.smth = Number(smthValue);
    // dispatch(addOrder(product));
    // console.log(product);
    return product;
  };
  console.log(product);

  const order = handleAddToCard(product);
  console.log(order);

  return (
    <>
      <div className={s.prodWrap}>
        <div
          className={s.color}
          style={{ backgroundColor: `${product.color}` }}
        ></div>

        <span className={s.price}>
          Price: {product.price * amountValue + Number(smthValue)}
        </span>
        <form>
          <select
            name="toppings"
            id="toppings"
            onChange={({ target: { value } }) => setSmthValue(value)}
          >
            <option>select smth</option>
            <option value="10">smth $10</option>
            <option value="20">smth $20</option>
            <option value="30">smth $30</option>
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
        <button type="button" onClick={() => dispatch(addOrder(product))}>
          add to cart
        </button>
      </div>
    </>
  );
}
