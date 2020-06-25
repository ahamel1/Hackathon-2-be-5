import React, { useState, useEffect } from 'react';

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <h4 className="mb-0 text-uppercase">
      {`${dateTime.toLocaleDateString('fr-FR', options)}`}
    </h4>
  );
}
