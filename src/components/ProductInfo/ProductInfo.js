import s from './ProductInfo.module.css';

export default function ProductInfo({ product }) {
  return (
    <>
      <div className={s.prodWrap}>
        <div
          className={s.color}
          style={{ backgroundColor: `${product.color}` }}
        ></div>
        <span className={s.price}>Price: {product.price}</span>
      </div>
      <form>
        <select name="toppings" id="toppings">
          <option value="df"></option>
        </select>
      </form>
    </>
  );
}
