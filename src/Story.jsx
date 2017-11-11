
import React from 'react';
// import $ from 'jquery';


export default class Story extends React.Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;
    const fullPath = `https://hrsf84-mvp-server.herokuapp.com${path}`;

    this.state = {};// json format of the story

    const self = this;

    console.log('About to do the GET request for the url\n', `${fullPath}\n`);

    fetch(fullPath, {
      'method': 'GET',
      'Content-Type': 'application/json'
    })
      .then((resp) => { console.log('resp', resp); return resp.json(); }) // Transform the data into json
      .then((res) => {
        console.log('data', res);
        self.setState(res); // set state with the data
      })
      .catch((e) => {
        console.log('e', e);
      });

    // do an async GET request with the path to get the data and set the state with it
    // fetch(`https://hrsf84-mvp-server.herokuapp.com/${path}`, { 'mode': 'no-cors' })
    //   .then(function (response) {

    //     console.log('In the .then for the fetch request');

    //     if (response.status !== 200) {
    //       console.log('Looks like there was a problem. Status Code: ' + response.status);
    //       return;
    //     }

    //     console.log('about to check the response...');

    //     // Examine the data in the response
    //     response.json()
    //       .then(function (data) {
    //         console.log('here\'s the data');
    //         console.log(data);
    //         console.log('about to set the state...');
    //         self.setState(data);
    //         console.log('end of fetch request');
    //       });
    //   })
    //   .catch(function (err) {
    //     console.log('Fetch Error :-S', err);
    //   });

  }

  //   {
  //   "_id": "5a064105fc55700c87b57677",
  //   "title": "The Second Story",
  //   "story": "Here is another story. It's even shorter than the first one.",
  //   "storyId": "5a064105fc55700c87b57676",
  //   "infoLine": "Fri Nov 10 2017 16:15:01 GMT-0800 (PST)  |  Comments: 0",
  //   "__v": 0,
  //   "comments": [],
  //   "images": [],
  //   "date": "Fri Nov 10 2017 16:15:01 GMT-0800 (PST)"
  // }

  render() {
    // when figuring out the styling for this render, factor out the non-story reliant portions
    // then load only the factored out portion when the story is not yet loaded

    if (this.state.title !== undefined) { // if the story is loaded
      return (
        <div>
          <br />
          <nav>Navbar goes here</nav>
          <h2>{this.state.title}</h2>
          { // the picures get rendered here
            this.state.images.map((image, index, array) => {
              return (
                <img src={image} alt='This img failed to load...' />
              );
            })
          }
          <p>{this.state.story}</p>
        </div>
      );
    } else {
      return (
        <h1>Please wait for the story to load...</h1>
      );
    }
  }
}

