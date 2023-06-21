import React from 'react';

const Signin = ({ onRouteChange }) => {
  return (
    <article className=" mv5 w-100 w-50-m w-25-l mw6 center">
      <div className="signincard br3 pa4 bg-transparent shadow-2 white">
        <div className="measure">
          <fieldset id="sign_up" className="pa3 ph4 mh5">
            <legend className="mt4 f1 fw7 ph2 mh1 ">Sign In</legend>
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
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white mt3"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('register')}
              className="f6 link dim white db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Signin;
