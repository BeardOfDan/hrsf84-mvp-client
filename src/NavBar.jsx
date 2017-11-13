import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.currentPath = this.props.location.pathname;
    this.homePath = `https://hrsf84-mvp-client.herokuapp.com/`;
    this.fullPath = this.homePath + this.currentPath;
  }

  render() {
    console.log('You can check out the repo @ https://github.com/BeardOfDan/hrsf84-mvp-client\n');
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href={`${this.homePath}Home`} >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${this.homePath}The First Story`} >First Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${this.homePath}The Second Story`} >The Second Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${this.homePath}Login`} >Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`${this.homePath}Signup`} >Signup</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
