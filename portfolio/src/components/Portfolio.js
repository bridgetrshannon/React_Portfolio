import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div>
      <p>Portfolio</p>
      <div className="row transboxPortfolio row-cols-md-3 p-3">
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href=" https://bridgetrshannon.github.io/Peckish/"
          />
          <div className="card-body">
            <Button className="mb-3"
              variant="danger"
              target="_blank"
              href="https://bridgetrshannon.github.io/Peckish/"
            >
              Project 1: Peckish
            </Button>{" "}
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Peckish"
            />
            <p className="card-text">
              The Peckish application helps users search for and discover new
              and exciting food and drink recipes without having to purchase a
              cookbook. This app uses HTML, CSS, jQuery, and JavaScript.
            </p>
          </div>
        </div>
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href="https://audiophyle-music-platform.herokuapp.com/"
          />
          <img
            src="assets/images/audiophyleLogo.png"
            alt="audiophyle logo"
            id="audiophyle-pic"
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Audiophyle"
            />
            <h5 className="card-title">Project 2: Audiophyle</h5>
            <p className="card-text">
              {" "}
              The Audiophyle application allows users to search for and save
              their favorite musical artists. This app uses MySQL, JavaScript,
              Node.js, Express, Bootstrap, and TheAudioDB.
            </p>
          </div>
        </div>
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href="https://the-burger-place-1.herokuapp.com/"
          />
          <img
            src="assets/images/burgerplace.png"
            alt="burger place"
            id="burger-pic"
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Burgers"
            />
            <h5 className="card-title">The Burger Place</h5>
            <p className="card-text">
              The Burger Place is an application created using MySQL, Node,
              Express, Handlebars and an ORM. The MVC design pattern is
              utilized. Node and MySQL query and route the data in the
              application while Handlebars generates the HTML.
            </p>
          </div>
        </div>
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href="https://github.com/bridgetrshannon/Readme_Generator"
          />
          <img
            src="assets/images/readmegenerator.png"
            alt="readme generator"
            id="readme-pic"
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Readme_Generator"
            />
            <h5 className="card-title">Readme Generator</h5>
            <p className="card-text">
              The Readme Generator is a command-line application that
              dynamically generates a professional README.md file from a user's
              input using the Inquirer package.
            </p>
          </div>
        </div>
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href="https://github.com/bridgetrshannon/Employee_Tracker"
          />
          <img
            src="assets/images/employeetracker.png"
            alt="employee tracker"
            id="employeetracker-pic"
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Employee_Tracker"
            />
            <h5 className="card-title">Employee Tracker</h5>
            <p className="card-text">
              {" "}
              The Employee Tracker application allows the user to view and
              manage the departments, roles, and employees in their company so
              they can organize and plan their business. This is a Node app
              utilizing the command-line.
            </p>
          </div>
        </div>
        <div className="card text-center mb-4">
          <Link
            target="_blank"
            href="https://github.com/bridgetrshannon/Team_Profile_Generator"
          />
          <img
            src="assets/images/teamprofilegenerator.png"
            alt="team profile generator"
            id="teamprofilegenerator-pic"
            className="card-img-top"
          />
          <div className="card-body">
            <Link
              target="_blank"
              href="https://github.com/bridgetrshannon/Team_Profile_Generator"
            />
            <h5 className="card-title">Team Profile Generator</h5>
            <p className="card-text">
              The Team Profile Generator application allows a user to manage
              information for their team. Using the command-line, a user can
              input their team's information. When the user has completed
              building the team, the application will create an HTML file that
              displays a nicely formatted team roster based on the information
              provided by the user.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
