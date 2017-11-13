
import React from 'react';
import Home from './Home.jsx';
import AllStories from './AllStories';

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.path = this.props.location.pathname;
    this.fullPath = `https://hrsf84-mvp-server.herokuapp.com${this.path}`;

    this.state = { // a json format of the story
      'title': 'Please Wait for the story to load...',
      'story': 'Fetching the story now...',
      'images': []
    };

    const self = this;

    let url = this.fullPath;

    this.specificPaths = ['', '/', '/Home', '/All Stories', '/Login', '/Signup'];

    console.log('this.path', this.path);
    console.log(this.specificPaths.indexOf(this.path));


    if (this.specificPaths.indexOf(this.path) > -1) { // don't do the query in this component
      // techncially, this case doesn't need any action
    } else { // do the normal story query
      fetch(url, {
        'method': 'GET',
        'Content-Type': 'application/json'
      })
        .then((res) => { return res.json(); }) // Transform the data into json
        .then((res) => {
          if (res.error === undefined) { // if it was not an error object that the server sent
            self.setState(res); // set state with the data
          } else { // render a 404 page
            self.setState({
              'title': 'Nothing To See Here',
              'story': 'It appears that the story you attempted to fetch does not exist',
              // do a line here to add the 404 image
              'images': ['./images/Gandalf 404 Page.jpg']
            });
          }
        })
        .catch((e) => {
          console.log('e', e);
        });
    }

  }

  render() {
    const index = this.specificPaths.indexOf(this.path)
    if (index > -1) { // render the particular component for that specific path
      if (index < 3) {
        return <Home />;
      } else if (index === 3) {
        return <AllStories />
      } else {
        return (
          <center>
            <p>It's the MVP project, and I spend WAY too much time trying to teach myself new technologies (like React Router) and doing trouble shooting to get relatively small features to work. So right now, the below image represents my authentication policy...</p>
            <img src='https://www.commitstrip.com/wp-content/uploads/2017/06/Strip-La-s%C3%A9curit%C3%A9-apr%C3%A8s-tout-english650-final.jpg' alt='asdf' />
          </center>
        );
      }
    } else { // perform the normal render
      return (
        <center>
          <div>
            <h2>{this.state.title}</h2>
            <small>{this.state.infoLine}</small>
            { // the picures get rendered here
              this.state.images.map((image, index, array) => {
                return (
                  <img src={image} alt='This img failed to load...' key={index} />
                );
              })
            }
            <p>{this.state.story}</p>
          </div>
        </center>
      );
    }
  }
}

