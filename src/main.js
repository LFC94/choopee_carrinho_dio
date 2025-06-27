import { addItem, deleteItem, listarItens } from "./services/cart.js";
import { createItem } from "./services/item.js";

const cart = [];

await addItem(cart, await createItem("hotwhells ferrari", 20.01, 1));
await addItem(cart, await createItem("hotwhells lamborguini", 15.19, 2));
await listarItens(cart);

await deleteItem(cart, cart[0].name);
await listarItens(cart);
