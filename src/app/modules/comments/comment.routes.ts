import express from 'express';
import { CommentControllers } from './comment.controllers';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CommentValidation } from './comment.validations';
import { USER_ROLE } from '../users/user.constants';

const router = express.Router();

export const CommentRoutes = router;

router.post(
  '/create-comment',
  auth(USER_ROLE.USER),
  validateRequest(CommentValidation.createCommentValidationSchema),
  CommentControllers.createComment
);

router.get(
  '/:id',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN),
  CommentControllers.getAllCommentsOfAPost
);
router.patch(
  '/:id',
  auth(USER_ROLE.USER),
  validateRequest(CommentValidation.createCommentValidationSchema),
  CommentControllers.updateCommentOfAUser
);
router.delete('/:id', auth(USER_ROLE.USER), CommentControllers.deleteComment);
