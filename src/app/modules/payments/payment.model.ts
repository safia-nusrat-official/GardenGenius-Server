/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose';
import { TPayment } from './payment.interface';
import { PAYMENT_METHODS } from './payment.constants';

const paymentSchema = new Schema<TPayment>(
  {
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: Object.keys(PAYMENT_METHODS),
      required: true,
    },
    transactionDetails: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    isSubscriptionActive: {
      type: Boolean,
      default: true,
    },
    nextBillingDate: {
      type: Date,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

export const Payment = model<TPayment>('payment', paymentSchema);
