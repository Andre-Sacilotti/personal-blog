// eslint-disable-next-line no-use-before-define
import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Routes from "./routes/index"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes />
          <div className={'Footer-MainLayout'}>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
