import React, { useState } from "react";
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
                physics // 물리적 구성요소로 설정
                kinematic-body // 중력이나 물리적 힘의 영향 안 받음
                camera-ref
            >
                {hasCursor && <Cursor />}
            </Camera>
            <Entity id="camera-limits">
                <Entity
                    id="x-limit"
                    geometry={{
                        primitive: "box",
                        width: 0.1,
                        height: 100,
                        depth: 100,
                    }}
                    position={{
                        x: -5,
                        y: 0,
                        z: 0,
                    }}
                    material={{
                        visible: true,
                    }}
                />
                <Entity
                    id="x-limit"
                    geometry={{
                        primitive: "box",
                        width: 0.1,
                        height: 100,
                        depth: 100,
                    }}
                    position={{
                        x: 5,
                        y: 0,
                        z: 0,
                    }}
                    material={{
                        visible: true,
                    }}
                />
                <Entity
                    id="z-limit"
                    geometry={{
                        primitive: "box",
                        width: 100,
                        height: 100,
                        depth: 0.1,
                    }}
                    position={{
                        x: 0,
                        y: 0,
                        z: -5,
                    }}
                    material={{
                        visible: true,
                    }}
                />
                <Entity
                    id="z-limit"
                    geometry={{
                        primitive: "box",
                        width: 100,
                        height: 100,
                        depth: 0.1,
                    }}
                    position={{
                        x: 0,
                        y: 0,
                        z: 5,
                    }}
                    material={{
                        visible: true,
                    }}
                />
            </Entity>
        </>
    );
}

export { CameraElement as default };
