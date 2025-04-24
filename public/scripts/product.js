class Product {
  constructor(id, name, price) {
    this.productId = id
    this.productName = name
    this.productPrice = price
  }

  getProductName() {
    return this.productName
  }

  getProductPrice() {
    return this.productPrice
  }

  setProductPrice(price) {
    this.productPrice = price
  }
}

const product1 = new Product(123, "table", 5.5)

console.log(product1)

product1.setProductPrice(2)
console.log(product1.productPrice)