import React, { useState, useEffect } from 'react';

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <h2 className="mb-0">{`${dateTime.toLocaleDateString()}`}</h2>;
}
