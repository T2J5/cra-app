import { RemotePaymentMethod } from "src/typings/payment";

export class PaymentMethod {
  private remotePaymentMethod: RemotePaymentMethod;

  constructor(remotePaymentMethod: RemotePaymentMethod) {
    this.remotePaymentMethod = remotePaymentMethod;
  }

  get provider() {
    return this.remotePaymentMethod.name;
  }

  get label () {
    if (this.provider === 'cash') {
      return `Pay in ${this.provider}`;
    }
    return `Pay with ${this.provider}`;
  }

  get isDefaultMethod () {
    return this.provider === 'cash';
  }
}

