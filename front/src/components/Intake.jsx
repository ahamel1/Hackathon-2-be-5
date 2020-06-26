import React, { useState, useEffect } from 'react';
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
  const [time, setTime] = useState(null);

  useEffect(() => {
    // "2020-06-26T20:00:34.696Z"

    const date = datetime.split('T')[0]; // 2020-06-26
    const time = datetime.split('T')[1]; // 20:00:34.696Z
    setTime(`${time.split(':')[0]}:${time.split(':')[1]}`);
  }, [datetime]);

  const orange = (datetime) => {
    const hour = new Date(datetime).getTime();
    const now = new Date().getTime() + 7200000;
    if (hour < now && !isChecked) {
      return true;
    }
    return false;
  };

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
        className={`d-flex align-items-center mt-3 mb-4 border-top ${
          orange(datetime) && 'bg-warning'
        } ${isChecked && 'bg-info'}`}
        style={{ boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }}
      >
        <Col xs="2" style={{ fontSize: '1.5rem' }}>
          {time}
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
