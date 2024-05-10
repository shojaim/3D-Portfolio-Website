import React, { useRef, useEffect } from 'react';

import shipScene from '../assets/3d/ship.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Ship = ({ isRotating,shipScale, shipPosition, rotation }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(shipScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Scene'].play();
    } else {
      actions['Scene'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh 
        scale={shipScale} 
        position={shipPosition} 
        rotation={rotation} 
        ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Ship;
