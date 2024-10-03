/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodArray, ZodEffects, ZodRecord } from 'zod';
import { catchAsync } from '../utils/catchAsync';

const validateImageFileRequest = (
  schema: AnyZodObject | ZodEffects<any> | ZodArray<any> | ZodRecord<any>
) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (req?.files) {
      console.log('Validating files');
      const parsedFile = await schema.parseAsync({
        files: req.files,
      });

      req.files = parsedFile.files;

      next();
    } else {
      console.log("validating file")
      console.log(req.file)
      const parsedFile = await schema.parseAsync(req.file);
      console.log(parsedFile)
      req.file = parsedFile;

      next();
    }
  });
};

export default validateImageFileRequest;
