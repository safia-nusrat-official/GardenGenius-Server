/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { POST_CATEGORY } from './post.constants';

export type TPost = {
  _id?: string;
  title: string;
  author: Types.ObjectId;
  content: string;
  category: (typeof POST_CATEGORY)[number];
  premimum: boolean;
  images: string[];
  comments: Types.ObjectId[];
  upvotes: number;
  downvotes: number;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
};

export interface IPostModel extends Model<TPost> {}
