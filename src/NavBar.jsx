import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = this.props.location.pathname;
    this.fullPath = `https://hrsf84-mvp-client.herokuapp.com${this.path}`;
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <p>This is the navbar</p>
          <button type="button" className="btn btn-primary">Primary</button>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href={this.fullPath} >Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={this.fullPath} >Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={this.fullPath} >Link</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
