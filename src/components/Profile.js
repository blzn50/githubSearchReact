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
      });
  }
  render() {
    // this is for when data is passed from Link
    // const { info } = this.props.location.state;
    // console.log(info);
    const { user } = this.state;
    return (
      <div className="container">
        {user.name && (
          <h1>
            Profile of <span style={{ fontWeight: 600 }}>{user.name}</span>
          </h1>
        )}

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
              <h3>{user.name}</h3>
              <hr />
              <table className="table table-borderless">
                <tbody>
                  {user.login && (
                    <tr>
                      <td className="table-key">Username</td>
                      <td className="table-value">{user.login}</td>
                    </tr>
                  )}

                  {user.bio && (
                    <tr>
                      <td className="table-key">Bio</td>
                      <td className="table-value">{user.bio}</td>
                    </tr>
                  )}

                  {user.company && (
                    <tr>
                      <td className="table-key">Company</td>
                      <td className="table-value">{user.company}</td>
                    </tr>
                  )}

                  {user.location && (
                    <tr>
                      <td className="table-key">Located</td>
                      <td className="table-value">{user.location}</td>
                    </tr>
                  )}

                  {user.created_at && (
                    <tr>
                      <td className="table-key">Account Created</td>
                      <td className="table-value">{user.created_at}</td>
                    </tr>
                  )}

                  {user.blog && (
                    <tr>
                      <td className="table-key">
                        <span className="blog">Blog:</span>
                      </td>
                      <td className="table-value">
                        <a className="blog-link" href={user.blog}>
                          {user.blog}
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
