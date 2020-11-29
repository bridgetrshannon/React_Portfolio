import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

function PortfolioCard(props) {
  return (
    <div className="portfolio">
      <Card className="text-center p-3">
        <div className="portfolio-image mb-3">
          <img src={props.image} alt="Portfolio" id="portfolioImg" />
        </div>
        <p className="portfolio-description mb-3">{props.description}</p>
        <Button
          className=" cardBtn"
          variant="outline-dark"
          target="_blank"
          href={props.repoOrDeploy}
          rounded
        >
          <h5>{props.btnText}</h5>
        </Button>
      </Card>
      <br />
    </div>
  );
}

export default PortfolioCard;
