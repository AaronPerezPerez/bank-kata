import { MoneyValue } from "./MoneyValue.js";

export class Denomination {
  private value: number;

  constructor(value: MoneyValue) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}


