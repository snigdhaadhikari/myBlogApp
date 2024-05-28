import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h1 className="display-1">404</h1>
          <p className="lead">Oops! The page you are looking for does not exist.</p>
          <Button variant="primary">  <Link to="/Home">Go back Home</Link></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
