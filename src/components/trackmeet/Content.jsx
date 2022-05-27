import React from "react";
import TrackmeetOnMac from "../../images/TrackmeetOnMac.svg";
import TrackmeetShowcase from "../../images/TrackmeetShowcase.svg";

export default function Content() {
  return (
    <div>
      <div>
        <div>
          <h3>Role</h3>
          <p>Web Developer / Test Automation</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>June 2021 - Present</p>
        </div>
        <div>
          <h3>Overview</h3>
          <p>
            React/TS front end w/ Java/Spring back end, and Unit/Integration/E2E
            testing.
          </p>
        </div>
      </div>
      <img src={TrackmeetOnMac} alt="Trackmeet on Mac Desktop"></img>
      <div>
        <h3>Contributions</h3>
        <p>I worked here for a bit</p>
      </div>
      <img src={TrackmeetShowcase} alt="Trackmeet Showcase"></img>
      <div>
        <h3>Summary</h3>
        <p>I worked here for a bit</p>
      </div>
    </div>
  );
}
