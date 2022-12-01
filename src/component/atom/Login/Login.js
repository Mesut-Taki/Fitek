import React from "react";
import { Button, StyledContainer } from "./Login.styles";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <StyledContainer className="login1">
      <Container className="mt-5 ">
        <Row>
          <Col lg="3"></Col>
          <Col className="m-5" lg="6">
            <Card className="p-5">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus="autofocus"
                    placeholder="Username"
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Button variant="dark" size="lg" type="submit">
                  GİRİŞ
                </Button>
              </Form>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default Login;
