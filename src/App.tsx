<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import { useState, useEffect } from "react";
import { Scene, Entity } from "@belivvr/aframe-react";
import { Grass } from "./components/floor";
import Camera from "./components/Camera";
function App() {
    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
            require("./aframe/joystick"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>하이요</>;
    }

    return (
        <Scene cursor="rayOrigin: mouse;">
            <Grass />
            <Camera fly={false} />
        </Scene>
    );
>>>>>>> parent of 799cb61 (dev init)
}

export default App;
