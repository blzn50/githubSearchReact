import React, { Component } from 'react';
import Search from './Search';
import SearchList from './SearchList';

class Home extends Component {
  state = {
    data: []
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
      this.setState({ data: data.items });
      console.log(this.state.data);
    }
  };

  handleKeyPress = e => {
    if (e.key === 'enter') {
      this.handleSearch();
    }
  };
  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          handleKeyPress={this.handleKeyPress}
        />
        <SearchList className="mt-4" data={this.state.data} />
      </div>
    );
  }
}

export default Home;
