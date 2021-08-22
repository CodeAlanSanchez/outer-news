import React from "react";

const Hero = () => (
  <div className="hero background-parallax" id="hero">
    <div className="box-shadow">
      <h1>Outer News</h1>
      <p>Articles take you to third-party site</p>
      <hr />
      <p>
        <em>made using ReactJS with Redux + TypeScript and an </em>
        <span>
          <em>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.spaceflightnewsapi.net/documentation"
            >
              API
            </a>
          </em>
        </span>
      </p>
    </div>
  </div>
);

export default Hero;
