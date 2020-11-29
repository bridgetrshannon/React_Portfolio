import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard";
import "../App.css";

const CardContainer = () => {
  return (
    <div>
      <br />
      <Container fluid="md" className="text-center">
        <Row className="ml-2 mr-2">
          <Col>
            <PortfolioCard
              image="../images/peckishlogo.png"
              description="The Peckish application helps users search for and discover new
              and exciting food and drink recipes without having to purchase a
              cookbook. This app uses HTML, CSS, jQuery, and JavaScript."
              repoOrDeploy="https://bridgetrshannon.github.io/Peckish/"
              btnColor="outline-dark"
              btnText="Project 1: Peckish"
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
              btnText="Project 2: Audiophyle"
            />
          </Col>
        </Row>
        <Row className="ml-2 mr-2">
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
          <Col>
            <PortfolioCard
              image="../images/readmegenerator.png"
              description="The Readme Generator is a command-line application that
              dynamically generates a professional README.md file from a
              user's input using the Inquirer package."
              repoOrDeploy="https://github.com/bridgetrshannon/Readme_Generator"
              btnColor="secondary"
              btnText=" Readme Generator"
            />
          </Col>
        </Row>
        <Row className="ml-2 mr-2">
          <Col>
            <PortfolioCard
              image="../images/employeetracker.png"
              description="The Employee Tracker application allows the user to view and
              manage the departments, roles, and employees in their company so
              they can organize and plan their business. This is a Node app
              utilizing the command-line."
              repoOrDeploy="https://github.com/bridgetrshannon/Employee_Tracker"
              btnColor="info"
              btnText="Employee Tracker"
            />
          </Col>
          <Col>
            <PortfolioCard
              image="../images/teamprofilegenerator.png"
              description="The Team Profile Generator application allows a user to manage
              information for their team. Using the command-line, a user can
              input their team's information. When the user has completed
              building the team, the application will create an HTML file that
              displays a nicely formatted team roster based on the information
              provided by the user."
              repoOrDeploy="https://github.com/bridgetrshannon/Team_Profile_Generator"
              btnColor="primary"
              btnText="Team Profile Generator"
            />
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default CardContainer;
