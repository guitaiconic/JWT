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

//ANOTHER WAY OF WRITING ASYNCHANDLER

// export const asyncHandler = (
//   fn: (req: any, res: any, next: any) => Promise<void>
// ) => {
//   return (req: any, res: any, next: any) => {
//     Promise.resolve(fn(req, res, next)).catch((error) => {
//       console.log("Error caught by asynchandler", error);
//       res.status(500).json(globalResponse(null, 200, error.message));
//     });
//   };
// };
