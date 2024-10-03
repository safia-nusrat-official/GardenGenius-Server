import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentServices } from './payment.services';

const createPayment = catchAsync(async (req, res) => {
  const payment = await PaymentServices.createPaymentIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment Created Successfully',
    data: payment,
  });
});

const getAllPayments = catchAsync(async (req, res) => {
  const payments = await PaymentServices.getAllPaymentsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payments Retrieved Successfully',
    data: payments,
  });
});

const getSinglePayment = catchAsync(async (req, res) => {
  const payment = await PaymentServices.getSinglePaymentFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment Retrieved Successfully',
    data: payment,
  });
});

const deletePayment = catchAsync(async (req, res) => {
  const payment = await PaymentServices.deletePaymentFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Payment Deleted Successfully',
    data: payment,
  });
});

export const PaymentControllers = {
  getSinglePayment,
  createPayment,
  getAllPayments,
  deletePayment
};
