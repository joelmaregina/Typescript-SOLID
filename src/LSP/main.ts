/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistancy } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoPercentDiscount } from './classes/discount';

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
