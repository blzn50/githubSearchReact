import React, { Component } from 'react';

class Profile extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ user: json });
        console.log(this.state.user);
      });
  }
  render() {
    // this is for when data is passed from linking component
    // const { info } = this.props.location.state;
    // console.log(info);
    const { user } = this.state;
    return (
      <div className="container">
        <h1>Profile of {user.name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top mb-2"
                  alt="profile img of user"
                  src={user.avatar_url}
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item stats d-flex justify-content-between align-items-center">
                    Public repos
                    <span className="badge badge-primary badge-pill">
                      {user.public_repos}
                    </span>
                  </li>
                  <li className="list-group-item stats d-flex justify-content-between align-items-center">
                    Public gists
                    <span className="badge badge-primary badge-pill">
                      {user.public_gists}
                    </span>
                  </li>
                  <li className="list-group-item stats d-flex justify-content-between align-items-center">
                    Followers
                    <span className="badge badge-primary badge-pill">
                      {user.followers}
                    </span>
                  </li>
                  <li className="list-group-item stats d-flex justify-content-between align-items-center">
                    Following
                    <span className="badge badge-primary badge-pill">
                      {user.following}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div>{user.name}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
