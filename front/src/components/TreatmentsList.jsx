import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import Treatment from './Treatment';

import { baseUrl, token } from '../api.js';

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
    <Row>
      {treatments.map((tr) => {
        return <Treatment {...tr} />;
      })}
    </Row>
  );
}

export default List;
