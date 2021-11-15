import React, { Fragment, useState } from 'react';
import ReactPaginate from 'react-paginate';

///Components
import NoticeBox from '../NoticeBox/NoticeBox';

function Pagination(props) {
  const [users] = useState(props.Data);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, idx) => {
      return (
        <Fragment key={idx}>
          {props.page === 'predication' ? (
            <NoticeBox {...item} />
          ) : (
            <div>hola</div>
          )}
        </Fragment>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={props.className}>
      {displayUsers}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
}

export default Pagination;
