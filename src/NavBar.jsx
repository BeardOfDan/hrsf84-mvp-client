import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = this.props.location.pathname;
    this.fullPath = `https://hrsf84-mvp-server.herokuapp.com${this.path}`;
  }

  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <p>This is the navbar</p>
          <button type="button" className="btn btn-primary">Primary</button>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="{this.fullPath}">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{this.fullPath}">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{this.fullPath}">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="{this.fullPath}">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
