

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber"
import { a } from '@react-spring/three'
import strongholdScene from '../assets/3d/stronghold.glb'
import * as THREE from 'three';

const Stronghold = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const strongholdRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(strongholdScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches
       ? e.touches[0].clientX 
       : e.clientX;

      lastX.current = clientX;

    }

    const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    }

    const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if(isRotating) {
        const clientX = e.touches
          ? e.touches[0].clientX 
          : e.clientX;

        const delta = (clientX - lastX.current) / viewport.width
        
        strongholdRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    }

    const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft') {
        if(!isRotating) setIsRotating(true);
        strongholdRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
      } else if(e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(true);
        strongholdRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.0125;

      }
    }

    const handleKeyUp = (e) => {
      if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
      }
    }

    useFrame(() => {
      if(!isRotating) {
        rotationSpeed.current *= dampingFactor;

        if(Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }

        strongholdRef.current.rotation.y += rotationSpeed.current;

      } else {
        const rotation = strongholdRef.current.rotation.y;
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the stronghold's orientation
      switch (true) {
        case normalizedRotation >= 0 && normalizedRotation <= 0.7 || (normalizedRotation >= 6.1 && normalizedRotation <= 7):
          setCurrentStage(1);
          break;
        case normalizedRotation >= 1.396 && normalizedRotation <= 2.443:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 2.792 && normalizedRotation <= 3.839:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 4.363 && normalizedRotation <= 5.7:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }
      }
    });

    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    return (
      <a.group ref={strongholdRef} {...props}>
        <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.002}>
          <group rotation={[-Math.PI, 0, 0]}>
            <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
              <mesh
              geometry={nodes.merged_gate_sky_sketchfab_0.geometry}
              material={materials.sky_sketchfab}
              position={[29.601, 1.807, -4.342]}
              />
              <mesh
                geometry={nodes.merged_gate003_final_gate_low_0.geometry}
                material={materials.final_gate_low}
              />
              <mesh
                geometry={nodes.merged_gate005_final_alfa_0.geometry}
                material={materials.final_alfa}
              />
              <mesh
                geometry={nodes.merged_gate006_final_gate_top_0.geometry}
                material={materials.final_gate_top}
              />
              <mesh
                geometry={nodes.merged_gate007_final_C_0.geometry}
                material={materials.final_C}
              />
              <mesh
                geometry={nodes.merged_gate008_final_B_0.geometry}
                material={materials.final_B}
              />
              <mesh
                geometry={nodes.merged_gate009_final_SOMT_0.geometry}
                material={materials.final_SOMT}
              />
              <mesh
                geometry={nodes.merged_gate010_final_E_0.geometry}
                material={materials.final_E}
              />
              <mesh
                geometry={nodes.merged_gate011_final_A_0.geometry}
                material={materials.final_A}
              />
              <mesh
                geometry={nodes.merged_gate012_final_rope_0.geometry}
                material={materials.final_rope}
              />
            </group>
          </group>
        </group>
      </a.group>
    )
  }
  
  export default Stronghold;



