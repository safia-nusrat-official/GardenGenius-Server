import express from 'express';
import { UserControllers } from './user.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constants';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validations';

const router = express.Router();

export const UserRoutes = router;

router.post(
  '/create-user',
  auth(USER_ROLE.ADMIN),
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser
);
router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUser);
router.patch("/:id", UserControllers.updateUserProfile)