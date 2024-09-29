/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose';
import { ICommentModel, TComment } from './comment.interface';

const postSchema = new Schema<TComment, ICommentModel>(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    replies: {
      type: [Schema.Types.ObjectId],
      ref: 'comments',
    },
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'post',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

export const Comment = model<TComment, ICommentModel>('comment', postSchema);
