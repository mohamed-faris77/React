import React, { useState, useEffect } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
   
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time}</p>
    </div>
  );
};

export default LiveClock;
