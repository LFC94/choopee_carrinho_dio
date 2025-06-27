async function addItem(userCart, item) {
  userCart.push(item);
}
async function deleteItem(userCart, nameItem) {
  const index = userCart.findIndex((item) => item.name === nameItem);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}
async function removeItem(userCart, index) {}

async function listarItens(userCart) {
  userCart.forEach((item) => {
    console.log(`${item.name}:\t ${item.quantity} x R$ ${item.price} = R$ ${item.subTotal()}`);
  });
  console.log(`Valor total:\t\t\t\tR$ ${await calculateTotal(userCart)}`);
}
async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subTotal(), 0);
}

export { addItem, calculateTotal, deleteItem, listarItens, removeItem };
