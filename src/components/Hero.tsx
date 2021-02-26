import React from 'react';

const Hero = () => (
  <div className="hero background-parallax shadow" id="hero">
    <div>
      <h1>Outer News</h1>
      <p>Articles take you to </p>
      <span><a target="_blank" rel="noreferrer" className="link" href="https://www.spaceflightnow.com/">Space Flight News</a></span>
      <hr />
      <p>
        <em>made using ReactJs and Redux with an </em>
        <span><em><a className="link" target="_blank" rel="noreferrer" href="https://www.spaceflightnewsapi.net/documentation">API</a></em></span>
      </p>
    </div>
  </div>
);

export default Hero;
