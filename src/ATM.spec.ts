import { describe, it, expect } from "vitest";
import { ATM } from "./ATM.js";

describe(ATM, () => {
  describe("withdrawals of one denomination", () => {
    it("should return just one 500 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(500);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(500);
    });

    it("should return just one 200 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(200);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(200);
    });

    it("should return just one 100 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(100);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(100);
    });

    it("should return just one 50 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(50);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(50);
    });

    it("should return just one 20 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(20);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(20);
    });

    it("should return just one 10 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(10);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(10);
    });

    it("should return just one 5 bill", () => {
      const atm = new ATM();

      const result = atm.withdraw(5);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(5);
    });

    it("should return just one 2 coin", () => {
      const atm = new ATM();

      const result = atm.withdraw(2);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(2);
    });

    it("should return just one 1 coin", () => {
      const atm = new ATM();

      const result = atm.withdraw(1);

      expect(result.length).toBe(1);
      expect(result[0].getValue()).toBe(1);
    });
  });

  describe("withdrawals with more than one denomination", () => {
    it("should return two 500 bills", () => {
      const atm = new ATM();

      const result = atm.withdraw(1000);

      expect(result.length).toBe(2);
      expect(result[0].getValue()).toBe(500);
      expect(result[1].getValue()).toBe(500);
    });
  });

});
