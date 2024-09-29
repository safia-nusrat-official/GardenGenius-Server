/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose';
import { IPostModel, TPost } from './post.interface';
import { POST_CATEGORY } from './post.constants';

const postSchema = new Schema<TPost, IPostModel>(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: POST_CATEGORY,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    comments: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'comments',
    },
    downvotes: {
      type: Number,
    },
    upvotes: {
      type: Number,
    },
    images: {
      type: [String],
      default: null,
    },
    premimum: {
      type: Boolean,
      default: false,
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

export const Post = model<TPost, IPostModel>('post', postSchema);
