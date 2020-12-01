import React from "react";
import { Image } from "react-bootstrap";
import "../App.css";

const AboutContainer = () => {
  return (
    <body className="aboutImg">
      <div className="container">
        <div className="row">
          <br />
          <br />
          <br />
          <div className="col-md-9 transbox aboutText mt-5">
            <h2 id="headerCenter">Meet the Developer</h2>
            <Image
              src="./images/bridgetpic.png"
              alt="portfolio picture"
              height="200px"
              className="float-left mr-3 mt-2 mb-1"
              id="profImg"
            />
            <p>
              Bridget is a full stack web developer leveraging music education
              background to build a more inviting and accessible user experience
              on the web. They recently earned a certificate in full stack
              development from the University of Central Florida, with newly
              developed skills in JavaScript, CSS, React.js, and responsive web
              design.{" "}
            </p>
            <p>
              {" "}
              With previous experience as an educator, Bridget is ready to bring
              problem solving skills and a creative mindset to developing web
              applications. Their most recent project was a volunteer search
              application, Assist. On a team with another developer, they
              created an application that allows users to search for, save, and
              create volunteer opportunities. This app uses React.js,
              JavaScript, MongoDB, MDBootstrap, and Charity Navigator API.
              Bridget is looking forward to using their skills as part of a
              socially-conscious, quality-driven team to build better web
              experiences for all users.{" "}
            </p>
          </div>
          <br />
        </div>
      </div>
    </body>
  );
};

export default AboutContainer;
