import express from 'express';
import { PostControllers } from './post.controllers';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PostValidation } from './post.validations';
import { USER_ROLE } from '../users/user.constants';

const router = express.Router();

export const PostRoutes = router;

router.post(
  '/create-post',
  auth(USER_ROLE.ADMIN),
  validateRequest(PostValidation.createPostValidationSchema),
  PostControllers.createPost
);

router.get('/', PostControllers.getAllPosts);
router.get('/:id', PostControllers.getSinglePost);
router.patch("/:id", PostControllers.updatePost)
router.delete("/:id", PostControllers.deletePost)