import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { baseUrl, token } from '../api.js';

import Intake from './Intake';

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
      {intakes.map((intake) => {
        return <Intake {...intake} />;
      })}
    </>
  );
}

export default Treatment;
