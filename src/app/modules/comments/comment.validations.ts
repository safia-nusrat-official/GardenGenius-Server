import { isValidObjectId } from 'mongoose';
import { z } from 'zod';

const createCommentValidationSchema = z.object({
  body: z.object({
    content: z.string({
      required_error: 'Title is required',
    }),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
    post: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
  }),
});

const updateCommentValidationSchema = z.object({
  body: z.object({
    author: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
    post: z
      .string({
        required_error: 'Author is required',
      })
      .refine((value) => isValidObjectId(value)),
    replies: z
      .array(
        z.string({
          required_error: 'Title is required',
        })
      )
      .optional(),
    content: z
      .string({
        required_error: 'Content is required',
      }),
  }),
});

export const CommentValidation = {
  createCommentValidationSchema,
  updateCommentValidationSchema,
};
