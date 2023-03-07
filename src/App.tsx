import { useState, useEffect } from "react";
import { Scene, Entity } from "@belivvr/aframe-react";

function App() {
    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>하이요</>;
    }

    return (
        <Scene>
            <Entity
                geometry={{
                    primitive: "plane",
                    width: 100,
                    height: 100,
                }}
                rotation={{
                    x: -90,
                    y: 0,
                    z: 0,
                }}
                material={{
                    src: "texture/grass.jpg",
                    repeat: { x: 100, y: 100 },
                }}
            />
        </Scene>
    );
}

export default App;
