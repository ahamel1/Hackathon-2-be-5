import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

export default function User() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <Form className="w-75 mt-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="userEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="userEmail"
                placeholder="your@mail.com"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="userPassword"
                placeholder="your password"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </FormGroup>
            <Button color="white" className="btn-outline-primary float-right">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
