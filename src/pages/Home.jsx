import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
// @ts-ignore
import Stronghold from '../models/Stronghold';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
// @ts-ignore
import Ship from '../models/Ship';
import HomeInfo from '../components/HomeInfo';

import Mipha from '../assets/Mipha.mp3'
import { soundoff, soundon } from '../assets/icons';
import HomeWarn from '../components/HomeWarn';


const Home = () => {
  const audioRef = useRef(new Audio(Mipha));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return() => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustStrongholdForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -4, -45];
    let rotation = [0, 0, 0];
    if (window.innerWidth < 768) { 
      screenScale = [1.5, 1.5, 1.5];
    } else {
      screenScale = [2, 2, 2];
    }
    return [screenScale, screenPosition, rotation];
  }
  
  const adjustShipForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) { 
      screenScale = [0.0003, 0.0003, 0.0003];
      screenPosition = [1.5, -0.3, -1]
    } else {
      screenScale = [0.0005, 0.0005, 0.0005];
      screenPosition = [3, -1, -1]
    }
    return [screenScale, screenPosition];
  }
  
  const [strongholdScale, strongholdPosition, strongholdRotation] =
  adjustStrongholdForScreenSize();


  const [shipScale, shipPosition] = adjustShipForScreenSize();
  
  return (

    <section className="w-full h-screen relative">
  

    <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
 
      
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
        camera={{ near: 0.1, far: 1000 }}
        
      >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2} />
            <Bird />
            <Sky isRotating={isRotating} />
            <Stronghold 
              scale={strongholdScale}
              position={strongholdPosition}
              rotation={strongholdRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />

            <Ship 
              isRotating={isRotating}
              shipScale={shipScale}
              shipPosition={shipPosition}
              rotation={[0, 19, 0]}
            />
          </Suspense>
      </Canvas>

        <div className="absolute bottom-2 left-2">
          <img 
            src={!isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic) }
          />
        </div> 
      <div>
          {currentStage && <HomeWarn currentStage={currentStage} />}
      </div>  
    </section>
    
  )
  
}

export default Home




