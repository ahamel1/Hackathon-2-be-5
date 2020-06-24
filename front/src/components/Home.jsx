import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';
import DateTime from './Date';

const items = [
  { hour: '9', treatments: ['Doliprane'] },
  { hour: '9', treatments: ['Amoxicilline'] },
  { hour: '12', treatments: ['Xanax'] },
  { hour: '20', treatments: ['Advil'] },
];

export default function Home() {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center">
          <ListGroup className="w-75">
            <ListGroupItem
              className="mt-4 border-primary"
              style={{ border: '2px solid black' }}
            >
              <DateTime />
            </ListGroupItem>
            {items.map((item) => {
              return (
                <ListGroupItem
                  className={
                    isDone
                      ? 'd-flex aligh-content-center mt-3 border-top bg-secondary'
                      : 'd-flex aligh-content-center mt-3 border-top'
                  }
                  style={{ boxShadow: '0 .5rem 1rem rgba(0, 123, 255, 0.4)' }}
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
                            onClick={handleClick}
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Col>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

// {items
//   .filter((item) => item.hour === '9')
//   .map((filteredItem) => (
//     <Col>{filteredItem.treatments}</Col>
//   ))}
