import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from './components/Particles';

// import Clarifai from 'clarifai';

const returnClarifaiRequestOptions = (imageUrl) => {
  // URL of image to use. Change this to your image.
  const IMAGE_URL = 'imageUrl';
  const raw = JSON.stringify({
    user_app_id: {
      user_id: 'developingwithrosie',
      app_id: 'face-detection',
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + '69f9dfd5a33c4f79816b321d0294378e',
    },
    body: raw,
  };
  return requestOptions;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    // app.models.predict('face-detection', this.state.input)
    fetch(
      `https://api.clarifai.com/v2/workflows/Face/results`,
      returnClarifaiRequestOptions(this.state.input)
    )
      .then((response) => response.json())
      .then(
        function (response) {
          console.log(response);
        },
        // .outputs[0].data.regions[0].region_info.bounding_box
        function (err) {}
      );
  };

  render() {
    return (
      <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
