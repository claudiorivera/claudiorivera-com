type PaginateArgs = {
  array: any[];
  postsPerPage?: number;
  page?: number;
};
export const paginate = ({ array, postsPerPage, page = 1 }: PaginateArgs) =>
  !!postsPerPage
    ? array.slice((page - 1) * postsPerPage, page * postsPerPage)
    : array;
