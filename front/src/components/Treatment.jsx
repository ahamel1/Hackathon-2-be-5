import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { baseUrl, token } from '../api.js';
import { useEffect } from 'react';

function Treatment({ id }) {
  const [treatment, setTreatment] = useState({});

  useEffect(() => {
    const getTreatment = async () => {
      try {
        const res = await axios.get(baseUrl + '/treatments/' + id, {
          headers: {
            Authorization: token,
          },
        });
        setTreatment(res.data);
      } catch (error) {}
    };

    getTreatment();
  }, []);

  return <div></div>;
}

export default Treatment;
