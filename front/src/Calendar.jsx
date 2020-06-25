import React from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Form } from 'reactstrap';
import FullCalendar from '@fullcalendar/react';

function UserCalendar() {
  return (
    <>
      <Row>
        {/* ///<Link to="/calendar"> */}
        <p>Calendar</p>
        {/* </Link> */}
      </Row>
      <Row>
        <Col className="col col-md-8 ml-5 mt-5">
          <FullCalendar
            plugins={['']}
            initialView="listWeek"
            height="500px"
            events={[
              { title: 'event 1', date: '2020-06-01' },
              { title: 'event 2', date: '2020-06-27' },
            ]}
            selectable
            navLinks
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="col col-md-8 mt-5 ml-5">
            <FormGroup>
              <Label className="mt-5" for="exampleText">
                <h3>Mon ressenti journalier</h3>
              </Label>
              <Input type="textarea" name="text" id="Mon ressenti journalier" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="mx-auto">Note</Button>
        </Col>
      </Row>
    </>
  );
}

export default UserCalendar;
