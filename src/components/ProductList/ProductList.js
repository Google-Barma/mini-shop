import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ProductList.module.css';
import { loadMore, addOrder } from '../../redux/product/product-action';
import createItems from '../../service/createItems';
import localizePrice from '../../service/toLocale';
import { getProducts } from '../../redux/product/product-selectors';

export default function ProductList() {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const moreProducts = createItems();

  // const markup = [];
  // products.forEach((item, itemAgain, set) => markup.push(set[item]));
  // console.log(markup);

  return (
    <section>
      <ul className={s.list}>
        {products.map(product => (
          <li key={product.id} className={s.item}>
            <Link to={`/card${product.id}`}>
              <div
                className={s.color}
                style={{ backgroundColor: `${product.color}` }}
              ></div>
              <div className={s.price}>
                <span>{localizePrice(product.price)}</span>
              </div>
            </Link>
            <button
              type="button"
              className="button"
              onClick={() => dispatch(addOrder(product))}
            >
              add to card
            </button>
          </li>
        ))}
      </ul>
      <div className={s.buttonWrap}>
        <button
          className="button"
          type="button"
          onClick={() => dispatch(loadMore(moreProducts))}
        >
          load more
        </button>
      </div>
    </section>
  );
}
