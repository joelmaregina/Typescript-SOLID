type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder() {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    this._items.length = 0;
    console.log('O carrinho de compras foi limpo');
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Vestido', price: 69.99 });
shoppingCart.addItem({ name: 'Livro', price: 29.49 });
shoppingCart.addItem({ name: 'Cartão', price: 6.99 });

// shoppingCart.clear();

// shoppingCart.items[0] = { name: 'Vestido de Noiva', price: 3599.99 }; // Index signature in type 'readonly CartItem[]' only permits reading

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
