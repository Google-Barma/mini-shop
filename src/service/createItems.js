function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  return color;
}
function generatePrice() {
  return Math.round(Math.random() * 50);
}

export default function createProducts() {
  const products = new Set();
  do {
    const color = generateColor();

    products[color] = {
      color: color,
      price: generatePrice(),
    };
  } while (products.length <= 5);

  return products;
}

// export default function createItems() {
//   return [
//     { color: generateColor(), price: generatePrice(), id: uuidv4(), amount: 1 },
//     { color: generateColor(), price: generatePrice(), id: uuidv4(), amount: 1 },
//     { color: generateColor(), price: generatePrice(), id: uuidv4(), amount: 1 },
//     { color: generateColor(), price: generatePrice(), id: uuidv4(), amount: 1 },
//     { color: generateColor(), price: generatePrice(), id: uuidv4(), amount: 1 },
//   ];
// }
