import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router";

class CustomStyle extends Component {
  render() {
    return (
        <div>

      <div >
        <span> Welcome! </span>
        </div>

        <div class="row" >
        <Button   className="w-10 text-center mt-5"
          variant="primary"
          style={{ color: "white", background: "blue" }}
          size="lg"
        >
          CSC 4250
        </Button>
        </div>

        <div class="row">
        <Button  className="w-10 text-center mt-5"
          variant="primary"
          style={{ color: "white", background: "blue" }}
          size="lg"
        >
          CSC 4750
        </Button>
        </div>

        <div class="row">
        <Button className="w-10 text-center mt-5"
          variant="primary"
          style={{ color: "white", background: "blue" }}
          size="lg"
        >
          CSC 4230
        </Button>
      </div>

      <div class="row">
        <Button className="w-10 text-center mt-5"
          variant="primary"
          style={{ color: "white", background: "blue" }}
          size="lg"
        >
          CSC 4888
        </Button>
      </div>

      </div>
    );
  }
}

export default CustomStyle;