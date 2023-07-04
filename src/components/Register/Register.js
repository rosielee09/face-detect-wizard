import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      name: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch('https://facerecognitionbackend-p9cj.onrender.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <article className=" mv5 w-100 w-50-m w-25-l mw6 center">
        <div className="signincard br3 pa4 bg-transparent shadow-2 white">
          <div className="measure">
            <fieldset id="sign_up" className="pa3 ph4 mh5">
              <legend className="mt4 f1 fw7 ph2 mh1 ">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba b--white hover-bg-white hover-grey w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 white"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba b--white hover-bg-white hover-grey w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba b--white hover-bg-white hover-grey  w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white mt3"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}
export default Register;
