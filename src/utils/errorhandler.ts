import { error } from "console";
import { globalResponse } from "../response/globalResponse.js";

export const asyncHandler = (fn: any) => {
  return fn((req: any, res: any, err: any) => {
    fn(req, res, err);
  }).catch((error: any) => err(error));
};
