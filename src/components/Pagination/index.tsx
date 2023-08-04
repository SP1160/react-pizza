import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type TPaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

const Pagination: React.FC<TPaginationProps> = ({ currentPage, onChangePage }) => (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
    />
);
export default Pagination;
