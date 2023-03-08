import React, { useState, useEffect } from "react";
import { Entity, Camera, Cursor, Box } from "@belivvr/aframe-react";

interface CameraProps {
    limit?: object;
    speed?: number;
    fly?: boolean;
    hasCursor?: boolean;
}

function CameraElement({ limit, speed, fly, hasCursor }: CameraProps) {
    return (
        <>
            <Camera
                lookControls={{
                    magicWindowTrackingEnabled: true,
                }}
                wasdControls={{
                    fly: fly ?? true,
                    acceleration: speed ?? 65,
                }}
                camera-ref
            >
                {hasCursor && <Cursor />}
            </Camera>
        </>
    );
}

export { CameraElement as default };
