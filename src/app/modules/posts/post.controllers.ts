import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostServices } from './post.services';

const createPost = catchAsync(async (req, res) => {
  const post = await PostServices.createPostIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post Created Successfully',
    data: post,
  });
});

const getAllPosts = catchAsync(async (req, res) => {
  const posts = await PostServices.getAllPostsFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Posts Retrieved Successfully',
    data: posts,
  });
});

const getSinglePost = catchAsync(async (req, res) => {
  const post = await PostServices.getSinglePostFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post Retrieved Successfully',
    data: post,
  });
});
const updatePost = catchAsync(async (req, res) => {
  const post = await PostServices.updatePostIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post Updated Successfully',
    data: post,
  });
});

const deletePost = catchAsync(async (req, res) => {
  const post = await PostServices.deletePostFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post Deleted Successfully',
    data: post,
  });
});

export const PostControllers = {
  getSinglePost,
  createPost,
  getAllPosts,
  updatePost,
  deletePost
};
