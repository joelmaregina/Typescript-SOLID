/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

***(Abstrações: interfaces, types e classes abstratas)

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistancy } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
// import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noPercentDiscount = new NoPercentDiscount();
const shoppingCart = new ShoppingCart(noPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistancy();
// const individualCustomer = new IndividualCustomer(
//   'Joelma',
//   'Silva',
//   '012.345.678.90',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Grande',
  '1111.2222.3333-0001',
);

// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('A mensagem foi enviada pelo MOCK');
//   }
// }
// const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
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
