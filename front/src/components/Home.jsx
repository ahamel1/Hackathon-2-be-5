import React, { useState } from 'react';
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import TreatmentsList from './TreatmentsList';

export default function Home() {
  // const [isDoneOne, setIsDoneOne] = useState(false);
  // const [isDoneTwo, setIsDoneTwo] = useState(false);
  // const [isDoneThree, setIsDoneThree] = useState(false);
  const [show, setShow] = useState(false);

  // const handleClickOne = () => {
  //   setIsDoneOne(!isDoneOne);
  //   setShow(!show);
  // };

  // const handleClickTwo = () => {
  //   setIsDoneTwo(!isDoneTwo);
  //   setShow(!show);
  // };

  // const handleClickThree = () => {
  //   setIsDoneThree(!isDoneThree);
  //   setShow(!show);
  // };

  const toggle = () => setShow(!show);

  return (
    <Container>
      <Row style={{ margin: '3rem' }}>
        <Col className="d-flex justify-content-center text-center">
          <h2>Hi, Jean !</h2>
        </Col>
      </Row>

      <TreatmentsList />

      <Toast isOpen={show}>
        <ToastHeader toggle={toggle}>Great job !</ToastHeader>
        <ToastBody>You took your medication !</ToastBody>
      </Toast>
    </Container>
  );
}

/* {items.map((item) => {
              return (
                <ListGroupItem
                  className={
                    isDone
                      ? 'd-flex aligh-content-center mt-3 border-top bg-secondary'
                      : 'd-flex aligh-content-center mt-3 border-top'
                  }
                  style={{ boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }}
                >
                  <Col xs="2">{item.hour}h</Col>
                  <Col className="d-flex">
                    <Col className="justify-content-center">
                      {item.treatments}
                    </Col>
                    <Col xs="2">
                      <InputGroup className="justify-content-end align-items-end">
                        <InputGroupAddon addonType="prepend">
                          <Input
                            addon
                            onChange={handleClick}
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Col>
                </ListGroupItem>
              );
            })} */

// {items
//   .filter((item) => item.hour === '9')
//   .map((filteredItem) => (
//     <Col>{filteredItem.treatments}</Col>
//   ))}
