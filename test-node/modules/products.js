let products = [
    {
    id: 1,
    name: "iphone 12",
    price: 10000000,
  },
  {
    id: 2,
    name: "samsung galaxy s21",
    price: 9000000,
  },
  {
    id: 3,
    name: "xiaomi mi 11",
    price: 8000000,
  },
]

function addProduct(name, price) {
    const product = {
        id: products.length + 1,
        name,
        price,
    };
    products.push(product);
}

function getProducts() {
    return products;
}


module.exports = {
    addProduct,
    getProducts
}


