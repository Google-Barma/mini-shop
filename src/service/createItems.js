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

function generateSet(item) {
  let id = generateColor();
  item.add(id);
  item[id] = {
    color: id,
    price: generatePrice(),
    id,
    amount: 1,
    smth: 0,
  };
}

export default function createProducts(state = []) {
  let products = new Set();
  let convertObj = new Set();
  const productsArray = [];

  if (state.length === 0) {
    do {
      generateSet(products);
    } while (products.size < 5);

    products.forEach((product, a, set) => productsArray.push(set[product]));

    return productsArray;
  }

  if (state.length > 0) {
    state.map(product => {
      convertObj.add(product.id);
      convertObj[product.id] = product;
    });
    do {
      generateSet(convertObj);
    } while (convertObj.size < state.length + 5);

    convertObj.forEach((product, a, set) => productsArray.push(set[product]));

    return productsArray;
  }
}
