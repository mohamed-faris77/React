import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home= () => {
  const{ darkMode, toggleTheme} = useContext(ThemeContext);

  const themeStyle={
    backgroundColor: darkMode ? "magenta" : "rgb(132, 255, 0)",
    color: darkMode ? "rgb(132, 255, 0)" : "magenta",
    minHeight: "100vh",
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin : 0,
    Padding: 0,
  };

  return(
    <div style ={themeStyle}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;