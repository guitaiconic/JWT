export const globalResponse = (
  data: any,
  message: string,
  statusCode: Number
) => {
  return {
    statusCode,
    message,
    data,
  };
};
