import { errorHandler } from "./errorHandler.js";

export const asyncHandler = (fn: Function) => {
  return async (req: any, res: any, next: any) => {
    try {
      await fn(req, res, next);
    } catch (err: any) {
      const error = errorHandler(err);
      return res.status(error.statusCode).json(error);
    }
  };
};
