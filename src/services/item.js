async function createItem(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,
    subTotal() {
      return this.price * this.quantity;
    },
  };
}

export { createItem };
