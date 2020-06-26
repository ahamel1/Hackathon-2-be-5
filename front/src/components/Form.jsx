import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import style from './Form.module.css';

import Medecine from './medecine';
import TimeLeft from './TimeLeft';

export default function AddTreatment() {
  const handleClick = () => {
    toast.info('Medication added');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Form className="w-50 mt-4">
          <FormGroup>
            <Label for="drugsName">Name</Label>
            <Input
              type="text"
              name="text"
              id="drugsName"
              placeholder="Doliprane"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Starting date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="dosage">Duration of treatment (in days)</Label>
            <Input type="number" name="text" id="time" placeholder="10" />
          </FormGroup>
          <FormGroup>
            <div className="d-flex justify-content-start">
              <FormGroup style={{ width: '100%' }}>
                <Label for="dosage">Morning dosage</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="1000g"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
            </div>
            <div className="d-flex justify-content-start">
              <FormGroup style={{ width: '100%' }}>
                <Label for="dosage">Noon dosage</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="1000g"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
            </div>
            <div className="d-flex justify-content-start">
              <FormGroup style={{ width: '100%' }}>
                <Label for="dosage">Evening dosage</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="1000g"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
            </div>
          </FormGroup>
          <Link to="/treatment">
            <Button
              color="white"
              className="hoverClass float-right"
              style={{ borderColor: '#5bd1ff', color: '#5bd1ff' }}
              onClick={handleClick}
              onSubmit={handleSubmit}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </Col>
      <Col className={style.container}>
        <Medecine />
        <TimeLeft />
      </Col>
    </Row>
  );
}
