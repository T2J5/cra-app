import { PaymentStrategy } from "src/features/payment/models/PaymentStrategy";

export function getType(para: any) {
  return Object.prototype.toString.call(para)
}

export type RoundUpAlgorithm = (number: number) => number;

export const formatButtonLabel = (strategy: PaymentStrategy, total: number) =>
  `${strategy.getCurrencySign()}${total}`;

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: PaymentStrategy
) => {
  return agreeToDonate
    ? "Thanks for your donation"
    : `I would like to donate ${strategy.getCurrencySign()}${tip} to charity.`;
};

export const calculateTipFor =
  (calculateRoundUpFor: RoundUpAlgorithm) => (amount: number) => {
    return formatNumber(calculateRoundUpFor(amount) - amount);
  };

export const formatNumber = (number: number) => parseFloat(number.toPrecision(2));

function roundUpToNearestN(exp: number) {
  return function (amount: number) {
    const power = Math.pow(10, exp - 1);
    return Math.floor(amount / power + 1) * power;
  }
}

export const roundUpToNearestInteger = roundUpToNearestN(1);
export const roundUpToNearestTen = roundUpToNearestN(2);
export const roundUpToNearestHundred = roundUpToNearestN(3);
