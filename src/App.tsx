import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function App() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh ref={cubeRef} position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
}
