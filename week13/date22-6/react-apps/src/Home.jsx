
import React, { useContext } from 'react';
import { myContext } from './Logg';

const Homee = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(myContext);

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Homee;
