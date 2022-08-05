// Ex: O método cauculate não poderia ter comportamentos diferente nas classes filhas, forçar uma implementação diferente nas classes filhas, nem mudar o tipo de retorno nas classes filhas;
export abstract class Discount {
  protected discount = 0;

  cauculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoPercentDiscount extends Discount {}
