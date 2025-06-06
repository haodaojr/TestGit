const {addProduct, getProducts} = require('./modules/products.js')
const {formatPrice} = require('./modules/utils.js')
console.log('=== CommonJS Demo ===');
const newProduct = addProduct('iphone', 1000000)
console.log('Đã thêm sản phẩm:', newProduct);

const products = getProducts()
console.log('Danh sách sản phẩm:', products);
products.forEach(product=>{
    console.log(`- ${product.name}: ${formatPrice(product.price)}`);
})