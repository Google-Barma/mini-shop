import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProducts } from '../redux/product/product-selectors';
import ProductInfo from '../components/ProductInfo/ProductInfo';

export default function CardView() {
  const params = useParams();
  const products = useSelector(getProducts);

  const currentProduct = products.filter(product => product.id === params.id);

  return (
    <section>
      <div>CardView</div>
      <ProductInfo product={currentProduct[0]} />
    </section>
  );
}
