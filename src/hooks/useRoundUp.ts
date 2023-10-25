import { useMemo, useState } from "react";
import { PaymentStrategy } from "src/features/payment/models/PaymentStrategy";

export const useRoundUp = (amount: number, strategy: PaymentStrategy) => {
  const [agreeToDonate, setAgreeToDonate] = useState(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? strategy.getRoundUpAmount(amount) : amount,
      tip: strategy.getTip(amount),
    }),
    [agreeToDonate, amount, strategy]
  )

  const updateAgreeToDonate = () => setAgreeToDonate(agreeToDonate => !agreeToDonate);

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate
  };
}
