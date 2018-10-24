import React, { Component } from 'react';
import Search from './Search';
import SearchList from './SearchList';

class Home extends Component {
  state = {
    data: [],
    activePage: 1,
  };

  handleSearch = async e => {
    e.preventDefault();
    const q = e.target.elements.search.value;

    const api_call = await fetch(
      `https://api.github.com/search/users?q=${q}&client_id=${
        process.env.REACT_APP_CLIENTID
      }&client_secret=${process.env.REACT_APP_CLIENTSECRET}`
    );
    const data = await api_call.json();

    if (q) {
      this.setState({ data: data.items, totalCount: data.item_count });
    }
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} handleKeyPress={this.handleKeyPress} />
        <SearchList
          className="mt-4"
          data={this.state.data}
          activePageNumber={this.state.activePage}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
