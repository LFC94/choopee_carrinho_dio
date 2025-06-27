async function addItem(userCart, item) {
  userCart.push(item);
}
async function deleteItem(userCart, nameItem) {
  const index = userCart.findIndex((item) => item.name === nameItem);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}
async function removeItem(userCart, userItem) {
  const index = userCart.findIndex((item) => item.name === userItem.name);
  if (index !== -1) {
    const cart = userCart[index];
    if (cart.quantity <= 1) {
      deleteItem(userCart, cart.name);
    } else {
      userCart[index].quantity--;
    }
  }
}

async function listarItens(userCart) {
  userCart.forEach((item) => {
    console.log(`${item.name}:\t ${item.quantity} x R$ ${item.price.toFixed(2)} = R$ ${item.subTotal().toFixed(2)}`);
  });
  console.log(`Valor total:\t\t\t\tR$ ${(await calculateTotal(userCart)).toFixed(2)}`);
}

async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subTotal(), 0);
}

export { addItem, calculateTotal, deleteItem, listarItens, removeItem };
