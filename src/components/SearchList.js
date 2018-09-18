import React from 'react';

const SearchList = ({ data }) => (
  <div>
    <ul>
      {data.map(data => (
        <li key={data.id}>{data.login}</li>
      ))}
    </ul>
  </div>
);

export default SearchList;
