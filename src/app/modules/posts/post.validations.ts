import { isValidObjectId } from 'mongoose';
import { z } from 'zod';
import { POST_CATEGORY } from './post.constants';

const createPostValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
    content: z.string({
      required_error: 'Content is required',
    }),
    premimum: z.boolean({
      required_error: 'Premium is required',
    }),
    category: z.enum(POST_CATEGORY, {
      required_error: 'Category is required',
    }),
  }),
});

const updatePostValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).optional(),
    content: z.string({
      required_error: 'Content is required',
    }).optional(),
    premimum: z.boolean({
      required_error: 'Premium is required',
    }).optional(),
    category: z.enum(POST_CATEGORY, {
      required_error: 'Category is required',
    }).optional(),
  }),
});

export const PostValidation = {
  createPostValidationSchema,
  updatePostValidationSchema,
};
