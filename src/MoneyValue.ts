export const MONEY_VALUES = [500, 200, 100, 50, 20, 10, 5, 2, 1] as const;

export type MoneyValue = typeof MONEY_VALUES[number];
