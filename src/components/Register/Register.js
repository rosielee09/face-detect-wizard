import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <article className=" mv5 w-100 w-50-m w-25-l mw6 center">
      <div className="signincard br3 pa4 bg-transparent shadow-2 white">
        <form className="measure">
          <fieldset id="sign_up" class="pa3 ph4 mh5">
            <legend className="mt4 f1 fw7 ph2 mh1 ">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" for="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba b--white hover-bg-white hover-grey w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6 white" for="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba b--white hover-bg-white hover-grey w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label class="db fw6 lh-copy f6 white" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba b--white hover-bg-white hover-grey  w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white mt3"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </article>
  );
};
export default Register;
