import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard";
import "../App.css";

const CardContainer = () => {
  return (
    <body className="portfolioImg">
      <div className="container">
        <br />
        <Container fluid="md" className="text-center">
          <Row className="ml-2 mr-2 mt-5">
            <Col>
              <PortfolioCard
                image="../images/assist.png"
                description="The Assist application connects users with volunteer and community engagement opportunities. This app uses JavaScript, React, Redux, MongoDB, Express, JWT, Mongoose, MDBootstrap, and The Charity Navigator API."
                repoOrDeploy="https://github.com/bridgetrshannon/Assist"
                btnColor="success"
                btnText="Assist"
              />
            </Col>
            <Col>
              <PortfolioCard
                image="../images/audiophylelogo.png"
                description=" The Audiophyle application allows users to search for and save
                    their favorite musical artists. This app uses MySQL, JavaScript,
                    Node.js, Express, Bootstrap, and TheAudioDB."
                repoOrDeploy="https://audiophyle-music-platform.herokuapp.com/"
                btnColor="success"
                btnText="Audiophyle"
              />
            </Col>
          </Row>
          <Row className="ml-2 mr-2">
            <Col>
              <PortfolioCard
                image="../images/peckishlogo.png"
                description="The Peckish application helps users search for and discover new
               and exciting food and drink recipes without having to purchase a
               cookbook. This app uses HTML, CSS, jQuery, and JavaScript."
                repoOrDeploy="https://bridgetrshannon.github.io/Peckish/"
                btnColor="outline-dark"
                btnText="Peckish"
              />
            </Col>
            <Col>
              <PortfolioCard
                image="../images/burgerplace.png"
                description="The Burger Place is an application created using MySQL, Node,
            Express, Handlebars and an ORM. The MVC design pattern is
            utilized. Node and MySQL query and route the data in the
            application while Handlebars generates the HTML."
                repoOrDeploy="https://the-burger-place-1.herokuapp.com/"
                btnColor="warning"
                btnText="The Burger Place"
              />
            </Col>
          </Row>
          <Row className="ml-2 mr-2">
            <Col>
              <PortfolioCard
                image="../images/fitnesstracker.png"
                description="The Fitness Tracker application creates and tracks daily workouts. Users can log multiple exercises in a workout on a given day. Users can track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, users can track distance traveled."
                repoOrDeploy="https://fitness-tracker-5678.herokuapp.com/"
                btnColor="primary"
                btnText="Fitness Tracker"
              />
            </Col>
            <Col>
              <PortfolioCard
                image="../images/teamprofilegenerator.png"
                description="The Team Profile Generator application allows a user to manage information for their team. Using the command-line, a user can input their team's information. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user."
                repoOrDeploy="https://github.com/bridgetrshannon/Team_Profile_Generator"
                btnColor="info"
                btnText="Team Profile Generator"
              />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </body>
  );
};

export default CardContainer;
