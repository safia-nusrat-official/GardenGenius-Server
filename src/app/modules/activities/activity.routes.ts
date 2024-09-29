import express from 'express';
import { ActivityControllers } from './activity.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/user.constants';

const router = express.Router();

export const ActivityRoutes = router;

router.get('/', auth(USER_ROLE.ADMIN), ActivityControllers.getAllActivities);

router.delete(
  '/:id',
  auth(USER_ROLE.ADMIN),
  ActivityControllers.deleteActivity
);
