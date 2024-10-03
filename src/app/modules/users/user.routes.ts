import express from 'express';
import { UserControllers } from './user.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constants';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validations';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
import validateImageFileRequest from '../../middlewares/validateImageFileRequest';
import { ImageFileZodSchema } from '../../validation/image.validation';

const router = express.Router();

export const UserRoutes = router;

router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUser);
router.patch('/:id', UserControllers.updateUserProfile);
