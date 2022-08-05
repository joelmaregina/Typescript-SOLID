/*
Open/Closed principle
Entidades devem estar abertas para extensão, mas fechadas para modificação
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistancy } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './classes/discount';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noPercentDiscount = new NoPercentDiscount();
const shoppingCart = new ShoppingCart(noPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistancy();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Vestido', 69.99));
shoppingCart.addItem(new Product('Livro', 29.49));
shoppingCart.addItem(new Product('Cartão', 6.99));

// shoppingCart.clear();

// shoppingCart.items[0] = { name: 'Vestido de Noiva', price: 3599.99 }; // Index signature in type 'readonly CartItem[]' only permits reading

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
