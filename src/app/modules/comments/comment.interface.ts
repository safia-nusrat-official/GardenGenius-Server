/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TComment = {
  _id?: string;
  author: Types.ObjectId;
  content: string;
  post: Types.ObjectId;
  replies?:Types.ObjectId[] // reference to other comments on a comment
  isDeleted?:boolean
};

export interface ICommentModel extends Model<TComment> {}
