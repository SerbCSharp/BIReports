import {
  Html,
  OrbitControls,
  PivotControls,
  TransformControls,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";

export default function App() {
  const box = useRef();
  const sphere = useRef();
  const { position } = useControls({ position: -2 });
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls depthTest={false} visible={true} anchor={[0]}>
        <mesh ref={sphere} position-x={position}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            wrapperClass="label"
            position={[1, 1, 0]}
            center
            distanceFactor={8}
            occlude={[box, sphere]}
          >
            Это сфера
          </Html>
        </mesh>
      </PivotControls>

      <TransformControls position-x={2}>
        <mesh ref={box} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </TransformControls>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial color="greenyellow" />
      </mesh>
      <Float>
        <Text
          font="./bangers-v20-latin-regular.woff"
          color="salmon"
          position-y={2}
        >
          I love Drei
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}
