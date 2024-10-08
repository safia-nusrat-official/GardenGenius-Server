import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest, {
  validateRequestCookies,
} from '../../middlewares/validateRequest';
import { USER_ROLE } from '../users/user.constants';
import { AuthControllers } from './auth.controllers';
import { AuthValidation } from './auth.validations';
import { UserValidation } from '../users/user.validations';
import { multerUpload } from '../../config/multer.config';
import validateImageFileRequest from '../../middlewares/validateImageFileRequest';
import { ImageFileZodSchema } from '../../validation/image.validation';
import { parseBody } from '../../middlewares/bodyParser';

const router = express.Router();

router.post(
  '/signup',
  multerUpload.single('profilePhoto'),
  validateImageFileRequest(ImageFileZodSchema),
  parseBody,
  validateRequest(UserValidation.createUserValidationSchema),
  AuthControllers.signupUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  '/change-password',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
);

router.post(
  '/refresh-token',
  validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

export const AuthRoutes = router;
