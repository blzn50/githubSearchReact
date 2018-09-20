import React from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({ data }) => (
  <div className="searchList">
    <ul className="searchListing">
      {data.map(data => (
        <Link
          to={{
            pathname: `/users/${data.login}`,
            state: {
              info: data
            }
          }}
        >
          <li key={data.id}>{data.login}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export default SearchList;
