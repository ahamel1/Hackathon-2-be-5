import React, { useState } from 'react';
import {
  ListGroupItem,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

import { baseUrl, token } from '../api';

function Intake({ id, used, datetime, dosage, Drug }) {
  const [isChecked, setIsChecked] = useState(used);

  const handleClick = async () => {
    try {
      await axios.put(
        baseUrl + '/intakes/' + id,
        { used: true },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.info('Well done !');
      setIsChecked(true);
    } catch (err) {}
  };

  return (
    <div className="hvr-grow">
      <ListGroupItem
        className="d-flex align-items-center mt-3 mb-4 border-top"
        style={{ boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }}
      >
        <Col xs="2" style={{ fontSize: '1.5rem' }}>
          {datetime.slice(0, 5)}
        </Col>
        <Col className="justify-content-center">
          {Drug.name} - {dosage}mg
        </Col>
        <Col xs="2">
          <InputGroup className="justify-content-end align-items-end">
            <InputGroupAddon addonType="prepend">
              <Input
                style={{ transform: 'scale(2)' }}
                addon
                checked={isChecked}
                onChange={handleClick}
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </ListGroupItem>
    </div>
  );
}

export default Intake;
