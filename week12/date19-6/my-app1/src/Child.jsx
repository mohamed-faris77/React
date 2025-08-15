import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Child = (props) => {
  return (
    <>
      <div>
        <h3>Hello, {props.name}!</h3>
        <h3>You are {props.age} years old.</h3>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Child;
