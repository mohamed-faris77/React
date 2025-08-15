import React, { createContext, useState } from 'react'; 
import Homee from './Home';

export const myContext = createContext();

const Logg = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Homee />
    </myContext.Provider>
  );
};

export default Logg;
