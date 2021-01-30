export default function localizePrice(price) {
  return price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'UAH',
  });
}
