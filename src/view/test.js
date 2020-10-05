import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default class test extends Component {
  render() {
    return (
      <div>
        <Form>
          <h1>
            <i>SURVEY TIGER </i>
          </h1>
          <Link to="/create" ><Button  variant="danger" className="mt-4">
          Create Survey
          </Button></Link>
                <br></br>
            <Link to="/takesurvey"> <Button variant="danger" className="mt-4 ">
            Take Survey
          </Button></Link>
         
        </Form>
      </div>
    );
  }
}
