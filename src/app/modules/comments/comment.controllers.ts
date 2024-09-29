import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentServices } from './comment.services';

const createComment = catchAsync(async (req, res) => {
  const comment = await CommentServices.createCommentIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment Created Successfully',
    data: comment,
  });
});

const getAllCommentsOfAPost = catchAsync(async (req, res) => {
  const comments = await CommentServices.getAllCommentsOfAPostFromDB(req.params.id, req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comments Retrieved Successfully',
    data: comments,
  });
});

const updateCommentOfAUser = catchAsync(async (req, res) => {
  const comment = await CommentServices.updateCommentOfAUserFromDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment Updated Successfully',
    data: comment,
  });
});

const deleteComment = catchAsync(async (req, res) => {
  const comment = await CommentServices.deleteCommentFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment Deleted Successfully',
    data: comment,
  });
});

export const CommentControllers = {
  createComment,
  updateCommentOfAUser,
  getAllCommentsOfAPost,
  deleteComment,
};
