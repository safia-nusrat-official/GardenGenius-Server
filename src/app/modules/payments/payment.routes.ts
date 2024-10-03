import express from 'express';
import { PaymentControllers } from './payment.controllers';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PaymentValidation } from './payment.validations';
import { USER_ROLE } from '../users/user.constants';

const router = express.Router();

export const PaymentRoutes = router;

router.post(
  '/create-payment',
  auth(USER_ROLE.ADMIN),
  validateRequest(PaymentValidation.createPaymentValidationSchema),
  PaymentControllers.createPayment
);

router.get('/', PaymentControllers.getAllPayments);
router.get('/:id', PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment)