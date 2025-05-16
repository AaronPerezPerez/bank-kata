import { Denomination } from "./Denomination.js";
import { MONEY_VALUES } from "./MoneyValue.js";

export class ATM {
  public withdraw(amount: number): Denomination[] {
    const result = MONEY_VALUES.find((value => amount % value == 0));

    if (!result) throw new Error("Money can't be negative");

    return [new Denomination(result)];
  }
}

