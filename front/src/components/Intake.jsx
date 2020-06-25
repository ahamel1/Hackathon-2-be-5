import React from 'react';
import {
  ListGroupItem,
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

function Intake() {
  return (
    <ListGroupItem
      className="d-flex align-items-center mt-3 border-top"
      style={
        isDoneThree
          ? { backgroundColor: '#8080803d', boxShadow: 'none' }
          : { boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }
      }
    >
      <Col xs="2" style={{ fontSize: '1.5rem' }}>
        20h
      </Col>
      <Col>
        <Row>
          <Col className="justify-content-center">Sabril - 2cp de 500g</Col>
        </Row>
        <Row>
          <Col className="justify-content-center">
            Pregabaline - 2cp de 300g
          </Col>
        </Row>
        <hr style={{ borderColor: 'orange' }} />
        <Row>
          <Col className="justify-content-center font-italic">
            Doliprane - 1cp de 1g
          </Col>
        </Row>
      </Col>
      <Col xs="2">
        <InputGroup className="justify-content-end align-items-end">
          <InputGroupAddon addonType="prepend">
            <Input
              addon
              type="checkbox"
              onClick={handleClickThree}
              style={{ transform: 'scale(2)' }}
              aria-label="Checkbox for following text input"
            />
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </ListGroupItem>
  );
}

export default Intake;
