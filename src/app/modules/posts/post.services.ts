import { QueryBuilder } from '../../builder/QueryBuilder';
import { PostSearchableFields } from './post.constants';
import { TPost } from './post.interface';
import { Post } from './post.model';

const createPostIntoDB = async (payload: TPost) => {
  const post = await Post.create(payload);

  return post;
};

const updatePostIntoDB = async (id: string, payload: TPost) => {
  return null;
};

const getAllPostsFromDB = async (query: Record<string, unknown>) => {
  const posts = new QueryBuilder(Post.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(PostSearchableFields);

  const result = await posts.modelQuery;

  return result;
};

const getSinglePostFromDB = async (id: string) => {
  const post = await Post.findById(id);

  return post;
};

const deletePostFromDB = async (id: string) => {
  const post = await Post.findByIdAndDelete(id);

  return post;
};

export const PostServices = {
  createPostIntoDB,
  getAllPostsFromDB,
  getSinglePostFromDB,
  updatePostIntoDB,
  deletePostFromDB,
};
