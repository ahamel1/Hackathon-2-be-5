import React, { useState } from 'react';
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import TreatmentsList from './TreatmentsList';

export default function Home() {

  const [show, setShow] = useState(false);

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
