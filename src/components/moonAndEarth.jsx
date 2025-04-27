import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three';



function Moon(props) {
    const { nodes, materials } = useGLTF('assets/3dModels/Moon.glb');
    const myMoon = React.useRef()
    useFrame(({ clock }) => {
        myMoon.current.rotation.y =  0.01526 * clock.elapsedTime
    })
    const moonMaterial = materials['Material.001'];
    moonMaterial.roughness = 1;
    moonMaterial.metalness = 0;
    
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={moonMaterial}
                position={[0.07, 0.04, 0]}
                ref={myMoon}
            />
        </group>
    );
}

function Earth(props) {
    const { nodes, materials } = useGLTF('assets/3dModels/Earth.glb');
    const myEarth = React.useRef()
    useFrame(({ clock }) => {
        myEarth.current.rotation.y =  0.00417 * clock.elapsedTime
    })
    const EarthMaterial = materials['Material.001'];
    EarthMaterial.roughness = 1; 
    EarthMaterial.metalness = 0; 
    return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={EarthMaterial}
        position={[-2, 4, -15]}
        ref={myEarth}
        materia
      />
    </group>
  )
}

useGLTF.preload('assets/3dModels/Earth.glb')


export default function MoonAndEarth() {
    return (
        <div className="absolute right-10 top-40 w-[40rem] h-[40rem]">

            <Canvas
                style={{ background: 'transparent' }}
                camera={{ position: [0, 0, 4], fov: 36 , far:10000}}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Moon  />
                    <Earth scale={[4, 4, 4]}/>
                    <Environment preset="night" background={false} />
                </Suspense>
                
            </Canvas>
        </div>
    );
}
