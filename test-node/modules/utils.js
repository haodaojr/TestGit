function formatPrice(price){
    return `${price.toLocaleString('vi-VN')} VND`;
}
module.exports = {
    formatPrice
}