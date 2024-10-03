import { isValidObjectId } from 'mongoose';
import { z } from 'zod';
import { PAYMENT_METHODS } from './payment.constants';

const createPaymentValidationSchema = z.object({
  body: z.object({
    amount: z.number({
      required_error: 'Title is required',
    }),
    user: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
    nextBillingDate: z
      .string({
        required_error: 'Content is required',
      })
      .date(),
    paymentDate: z
      .string({
        required_error: 'Content is required',
      })
      .date(),
    transactionDetails: z.any().optional(),
    paymentMethod: z.enum(PAYMENT_METHODS, {
      required_error: 'Payment Method is required',
    }),
  }),
});


export const PaymentValidation = {
  createPaymentValidationSchema,
};
