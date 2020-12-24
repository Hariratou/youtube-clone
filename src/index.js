import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PlayersList from './PlayersList';


function App() {
  return(
    <div className="App">
       <PlayersList />
    </div>
  );
}
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
