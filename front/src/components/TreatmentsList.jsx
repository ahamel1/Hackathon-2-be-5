import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import './treatment.css';

import { baseUrl, token } from '../api.js';

import DateTime from './Date';
import Treatment from './Treatment';

function List() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const getTreatments = async () => {
      try {
        const res = await axios.get(baseUrl + '/treatments', {
          headers: {
            Authorization: token,
          },
        });
        setTreatments(res.data);
      } catch (error) {}
    };

    getTreatments();
  }, []);

  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center text-center">
          <ListGroup className="w-75">
            <ListGroupItem style={{ border: '2px solid #5bd1ff' }}>
              <DateTime />
            </ListGroupItem>
            {treatments.map((tr) => {
              return <Treatment {...tr} />;
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default List;
