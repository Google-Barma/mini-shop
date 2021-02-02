function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

function generatePrice() {
  const price = Math.round(Math.random() * 50);
  if (price < 1) return 1;

  return price;
}

export default function createProducts() {
  let products = new Set();

  do {
    let id = generateColor();
    products.add(id);
    products[id] = {
      color: id,
      price: generatePrice(),
      id,
      amount: 1,
      smth: 0,
    };
  } while (products.size < 5);

  const productArray = [];
  products.forEach((product, again, set) => {
    productArray.push(set[product]);
  });

  return productArray;
}
