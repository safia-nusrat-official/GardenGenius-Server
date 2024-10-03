import { QueryBuilder } from '../../builder/QueryBuilder';
import { TPayment } from './payment.interface';
import { Payment } from './payment.model';

const createPaymentIntoDB = async (payload: TPayment) => {
  const payment = await Payment.create(payload);

  return payment;
};

const getAllPaymentsFromDB = async (query: Record<string, unknown>) => {
  const payments = new QueryBuilder(Payment.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()

  const result = await payments.modelQuery;

  return result;
};

const getSinglePaymentFromDB = async (id: string) => {
  const payment = await Payment.findById(id);

  return payment;
};

const deletePaymentFromDB = async (id: string) => {
  const payment = await Payment.findByIdAndDelete(id);

  return payment;
};

export const PaymentServices = {
  createPaymentIntoDB,
  getAllPaymentsFromDB,
  getSinglePaymentFromDB,
  deletePaymentFromDB,
};
