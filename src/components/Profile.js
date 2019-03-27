import React, { Component } from 'react';
import Loading from '../assets/loading.gif';

class Profile extends Component {
  state = {
    user: {},
    error: null,
    loader: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(json => {
        if (json.message) {
          // keep empty true so do nothing maybe console.log the message.
          this.setState({ loader: false, error: json.message });
        } else {
          this.setState({ user: json, loader: false });
        }
      });
  }
  render() {
    // this is for when data is passed from Link
    // const { info } = this.props.location.state;
    // console.log(info);
    const { user, loader, error } = this.state;
    if (loader) {
      return (
        <div style={{ marginTop: '-3em', textAlign: 'center' }}>
          <img src={Loading} height="200" alt="Loading gif" />
        </div>
      );
    }
    return (
      <div>
        {error ? (
          <h3 style={{ marginTop: '3em', textAlign: 'center' }}>Oops! User not found!!</h3>
        ) : (
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
                        <span className="badge badge-primary badge-pill">{user.public_repos}</span>
                      </li>
                      <li className="list-group-item stats d-flex justify-content-between align-items-center">
                        Public gists
                        <span className="badge badge-primary badge-pill">{user.public_gists}</span>
                      </li>
                      <li className="list-group-item stats d-flex justify-content-between align-items-center">
                        Followers
                        <span className="badge badge-primary badge-pill">{user.followers}</span>
                      </li>
                      <li className="list-group-item stats d-flex justify-content-between align-items-center">
                        Following
                        <span className="badge badge-primary badge-pill">{user.following}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <h3>{user.name}</h3>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      {user.login ? (
                        <tr>
                          <td className="table-key">Username</td>
                          <td className="table-value">{user.login}</td>
                        </tr>
                      ) : null}
                      {user.bio ? (
                        <tr>
                          <td className="table-key">Bio</td>
                          <td className="table-value">{user.bio}</td>
                        </tr>
                      ) : null}
                      {user.company ? (
                        <tr>
                          <td className="table-key">Company</td>
                          <td className="table-value">{user.company}</td>
                        </tr>
                      ) : null}
                      {user.location ? (
                        <tr>
                          <td className="table-key">Located</td>
                          <td className="table-value">{user.location}</td>
                        </tr>
                      ) : null}
                      {user.created_at ? (
                        <tr>
                          <td className="table-key">Account Created</td>
                          <td className="table-value">{user.created_at.split('T')[0]}</td>
                        </tr>
                      ) : null}
                      {user.blog ? (
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
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
