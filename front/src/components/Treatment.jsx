import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { baseUrl, token } from '../api.js';
import { useEffect } from 'react';
import {
  ListGroupItem,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

function Treatment({ id }) {
  const [treatment, setTreatment] = useState({});
  const [intakes, setInTakes] = useState([]);

  function compare(a, b) {
    const artisteA = a.toUpperCase();
    const artisteB = b.toUpperCase();

    let comparison = 0;
    if (artisteA > artisteB) {
      comparison = 1;
    } else if (artisteB > artisteA) {
      comparison = -1;
    }
    return comparison;
  }

  useEffect(() => {
    const getTreatment = async () => {
      try {
        const res = await axios.get(baseUrl + '/treatments/' + id, {
          headers: {
            Authorization: token,
          },
        });
        const sortedIntakes = res.data.Intakes.sort((a, b) =>
          compare(a.datetime, b.datetime)
        );
        setTreatment(res.data);
        setInTakes(res.data.Intakes);
      } catch (error) {}
    };

    getTreatment();
  }, []);

  return (
    <>
      {intakes.map((el) => {
        return (
          <div className="hvr-grow">
            <ListGroupItem
              className="d-flex align-items-center mt-3 mb-4 border-top"
              style={{ boxShadow: '0 .5rem 1rem rgba(91, 209, 255, 0.3)' }}
            >
              <Col xs="2" style={{ fontSize: '1.5rem' }}>
                {el.datetime.slice(0, 5)}
              </Col>
              <Col className="justify-content-center">
                {el.Drug.name} - {el.dosage}mg
              </Col>
              <Col xs="2">
                <InputGroup className="justify-content-end align-items-end">
                  <InputGroupAddon addonType="prepend">
                    <Input
                      style={{ transform: 'scale(2)' }}
                      addon
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </ListGroupItem>
          </div>
        );
      })}
    </>
  );
}

export default Treatment;
