export type SuccessJSON<T = any> = {
  status: 'success';
  result: T;
};

export type ErrorJSON = {
  status: 'error';
  name: string;
  message: string;
};

export type PaginationResponse<Item = any> = {
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
  items: Item[];
};
