import {DataTable} from 'react-native-paper';

type PaginationProps = {
  page: number;
  numberOfPages: number;
  onPageChange: (num: number) => void;
  numberOfItemsPerPage: number;
};

function Pagination(props: PaginationProps) {
  const {page, numberOfPages, onPageChange, numberOfItemsPerPage} = props;

  return (
    <DataTable.Pagination
      page={page}
      numberOfPages={numberOfPages}
      onPageChange={onPageChange}
      label="1-10 of 10"
      showFastPaginationControls
      numberOfItemsPerPage={numberOfItemsPerPage}
    />
  );
}

export default Pagination;
