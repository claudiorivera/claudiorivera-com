type PaginateArgs = {
  array: any[];
  itemsPerPage?: number;
  page?: number;
};
export const paginate = ({ array, itemsPerPage, page = 1 }: PaginateArgs) =>
  !!itemsPerPage
    ? array.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : array;
