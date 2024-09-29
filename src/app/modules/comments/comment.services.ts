import { QueryBuilder } from '../../builder/QueryBuilder';
import { TComment } from './comment.interface';
import { Comment } from './comment.model';

const createCommentIntoDB = async (payload: TComment) => {
  const comment = await Comment.create(payload);

  return comment;
};

const updateCommentOfAUserFromDB = async (id: string, payload: TComment) => {
  return null;
};

const getAllCommentsOfAPostFromDB = async (
  postId: string,
  query: Record<string, unknown>
) => {
  const comments = new QueryBuilder(Comment.find({ _id: postId }), query)
    .sort()
    .filter();

  const result = await comments.modelQuery;

  return result;
};

const deleteCommentFromDB = async (id: string) => {
  const comment = await Comment.findByIdAndDelete(id);

  return comment;
};

export const CommentServices = {
  createCommentIntoDB,
  deleteCommentFromDB,
  getAllCommentsOfAPostFromDB,
  updateCommentOfAUserFromDB,
};
