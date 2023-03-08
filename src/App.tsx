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
}

export default App;
