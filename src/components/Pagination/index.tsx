import {DataTable} from 'react-native-paper';

type PaginationProps = {
  page: number;
  numberOfPages: number;
  onPageChange: (num: number) => void;
  numberOfItemsPerPage: number;
  totalItems: number;
};

function Pagination(props: PaginationProps) {
  const {page, numberOfPages, onPageChange, numberOfItemsPerPage, totalItems} =
    props;

  const from = page * numberOfItemsPerPage + 1;
  const to = Math.min((page + 1) * numberOfItemsPerPage, totalItems);

  return (
    <DataTable.Pagination
      page={page}
      numberOfPages={numberOfPages}
      onPageChange={onPageChange}
      label={`${from}-${to} of ${totalItems}`}
      showFastPaginationControls
      numberOfItemsPerPage={numberOfItemsPerPage}
    />
  );
}

export default Pagination;
