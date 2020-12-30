// eslint-disable-next-line no-use-before-define
import React from 'react';
import './App.css';
import Routes from "./routes/index"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

  );
}

export default App;
