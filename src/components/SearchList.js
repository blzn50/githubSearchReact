import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const SearchList = ({ data, activePageNumber, handlePageChange }) => {
  // For pagination
  const itemPerPage = 8;
  const startPage = itemPerPage * (activePageNumber - 1);
  const endPage = startPage + (itemPerPage - 1);
  const totalItems = data.length;

  return (
    <div className="searchList">
      <ul className="searchListing">
        {data
          .filter((data, i) => {
            return i >= startPage && i <= endPage;
          })
          .map(data => (
            <Link
              key={data.id}
              to={{
                pathname: `/users/${data.login}`,
                state: {
                  info: data,
                },
              }}
            >
              <li style={{ color: '#111' }}>{data.login}</li>
            </Link>
          ))}
      </ul>
      {totalItems > itemPerPage ? (
        <Pagination
          activePage={activePageNumber}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={totalItems}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      ) : null}
    </div>
  );
};

export default SearchList;
