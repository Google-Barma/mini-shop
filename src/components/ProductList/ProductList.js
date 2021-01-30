import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ProductList.module.css';
import { loadMore, addToOrder } from '../../redux/product/product-action';
import createItems from '../../service/createItems';
import localizePrice from '../../service/toLocale';

export default function ProductList() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const moreProducts = createItems();

  return (
    <section>
      <ul className={s.list}>
        {products.map(product => (
          <li key={product.id} className={s.item}>
            <Link
              to="/cart"
              id={product.id}
              onClick={e => console.log(e.currentTarget.id)}
            >
              <div>
                <div
                  className={s.color}
                  style={{
                    backgroundColor: `${product.color}`,
                  }}
                >
                  <div className={s.price}>{localizePrice(product.price)}</div>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className={s.button}
              onClick={() => dispatch(addToOrder(product))}
            >
              add to cart
            </button>
          </li>
        ))}
      </ul>
      <div className={s.buttonWrap}>
        <button type="button" onClick={() => dispatch(loadMore(moreProducts))}>
          load more
        </button>
      </div>
    </section>
  );
}
