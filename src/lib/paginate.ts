type PaginateArgs = {
  array: any[];
  limit: number;
  skip: number;
};
export const paginate = ({ array, limit, skip }: PaginateArgs) =>
  array.slice((skip - 1) * limit, skip * limit);
