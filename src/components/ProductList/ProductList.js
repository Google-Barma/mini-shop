import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ProductList.module.css';
import { loadMore, addToOrder } from '../../redux/product/product-action';
import createItems from '../../service/createItems';
import localizePrice from '../../service/toLocale';
import { getProducts } from '../../redux/product/product-selectors';

export default function ProductList() {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const markup = [];
  products.forEach((product, again, set) => {
    markup.push(set[product]);
  });

  return (
    <section>
      <ul className={s.list}>
        {markup.map(product => (
          <li key={product.id} className={s.item}>
            <div
              className={s.color}
              style={{ backgroundColor: `${product.color}` }}
            ></div>
            <div className={s.price}>
              <span>{localizePrice(product.price)}</span>
            </div>
            <button
              type="button"
              className="button"
              onClick={() => dispatch(addToOrder(product))}
            >
              add to card
            </button>
          </li>
        ))}
      </ul>
      <div className={s.buttonWrap}>
        {/* <button type="button" onClick={() => dispatch(loadMore(moreProducts))}>
          load more
        </button> */}
      </div>
    </section>
  );
}
