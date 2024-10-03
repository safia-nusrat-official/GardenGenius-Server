import { Types } from 'mongoose';
import { PAYMENT_METHODS, PAYMENT_STATUS } from './payment.constants';

export interface TPayment {
  amount: number;
  nextBillingDate: Date;
  isSubscriptionActive: boolean;
  user: Types.ObjectId;
  paymentMethod: typeof PAYMENT_METHODS[number];
  transactionDetails: Record<string, any>;
  paymentDate: Date;
  status: typeof PAYMENT_STATUS[number];
}
