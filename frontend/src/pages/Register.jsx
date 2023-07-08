import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="c_password"
                  placeholder="Enter confirm password..."
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <img
              style={{ width: "100%" }}
              src="https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
