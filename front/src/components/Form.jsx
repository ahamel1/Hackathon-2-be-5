import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import style from './Form.module.css';

import Medecine from './medecine';
import TimeLeft from './TimeLeft';

export default function AddTreatment() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Form className="w-75 mt-4">
          <FormGroup>
            <Label for="drugsName">Nom du médicament</Label>
            <Input
              type="text"
              name="text"
              id="drugsName"
              placeholder="Doliprane"
            />
          </FormGroup>
          <FormGroup>
            <Label for="drugsMolecule">Molécule</Label>
            <Input
              type="text"
              name="text"
              id="drugsMolecule"
              placeholder="Paracétamol"
            />
          </FormGroup>
          <FormGroup>
            <div>
              <FormGroup>
                <Label for="dosage">Nbre cp matin</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="3"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Heure</Label>
                <Input
                  type="time"
                  name="time"
                  id="exampleTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Label for="dosage">Nbre cp midi</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="3"
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
            <div>
              <FormGroup>
                <Label for="dosage">Nbre cp soir</Label>
                <Input
                  type="number"
                  name="number"
                  id="dosage"
                  placeholder="3"
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
          <FormGroup>
            <Label for="dosage">Durée du traitement (en jours)</Label>
            <Input type="number" name="text" id="time" placeholder="10" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date de début</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Col>
      <Col className={style.container}>
        <Medecine />
        <TimeLeft />
      </Col>
    </Row>
  );
}
