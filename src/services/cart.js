async function addItem(userCart, item) {
  userCart.push(item);
  return userCart;
}
async function deleteItem(userCart, nameItem) {}
async function removeItem(userCart, index) {}

async function listarItens(userCart) {
  userCart.forEach((item) => {
    console.log(
      `${item.name}:\t ${item.quantity} x R$ ${
        item.price
      } = R$ ${item.subTotal()}`
    );
  });
  console.log(`Valor total:\t\t\t\tR$ ${await calculateTotal(userCart)}`);
}
async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subTotal(), 0);
}

export { addItem, deleteItem, removeItem, calculateTotal, listarItens };
