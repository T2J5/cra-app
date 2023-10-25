import { usePaymentMethods } from 'src/hooks/usePaymentMethod';
import { PaymentMethods } from './PaymentMethods';
import { PaymentStrategy } from './models/PaymentStrategy';
import { useRoundUp } from 'src/hooks/useRoundUp';
import {
  formatButtonLabel,
  formatCheckboxLabel,
  roundUpToNearestInteger
} from 'src/utils/common';
import { DonationCheckbox } from './DonationCheckbox';

export default function Payment ({
  amount, strategy = new PaymentStrategy("$", roundUpToNearestInteger)
}: {amount: number, strategy?: PaymentStrategy }) {

  const { paymentMethods } = usePaymentMethods();
  const format = useRoundUp(amount, strategy);
  return (
    <div>
      <h3>Payment</h3>

      <PaymentMethods options={paymentMethods} />

      <DonationCheckbox
        onChange={format.updateAgreeToDonate}
        checked={format.agreeToDonate}
        content={formatCheckboxLabel(format.agreeToDonate, format.tip, strategy)}
      />

      <button>{formatButtonLabel(strategy, format?.total)}</button>
    </div>
  )
}
