
import React from 'react';


export default class Story extends React.Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;

    this.state = {};// json format of the story
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
                <img src={image} alt='This image failed to load...' />
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

