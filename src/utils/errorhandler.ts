export const errorHandler = (err: any) => {
  return {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
    data: null,
  };
};
