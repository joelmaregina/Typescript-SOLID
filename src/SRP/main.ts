import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistancy } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
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

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
