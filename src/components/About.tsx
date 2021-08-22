import React from 'react';

const About = () => (
  <div className="about background-parallax" id="about">
    <div className="box-shadow">
      <h1>About</h1>
      <p>
        This website was built using React, Redux, Typescript, and an
        {' '}
        <span><a className="link" href="https://www.spaceflightnewsapi.net/documentation">API</a></span>
        .
        It shows several articles and a summary of them, they link to the original website.
      </p>
    </div>
  </div>
);

export default About;
