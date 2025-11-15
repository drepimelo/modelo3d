// src/Cena3D.jsx

// 1. ADICIONE 'useRef' AQUI
import React, { Suspense, useRef } from 'react'

// 2. REMOVA 'Canvas' E 'OrbitControls' (não estão sendo usados)
import { Center, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Model } from './Bikeee.jsx' 

export default function Cena3d() {
  // Agora o 'useRef' está importado e funciona
  const groupRef = useRef()
  
  const scrollData = useScroll()

  useFrame((state, delta) => {
    // Esta lógica de rotação está PERFEITA!
    const novaRotacaoY = scrollData.offset * (Math.PI * 2)
    groupRef.current.rotation.y = novaRotacaoY
  })

  // 3. O 'return' não precisa do <Canvas />
  return (
    <>
      <ambientLight intensity={12} />
      <directionalLight position={[10, 10, 10]} intensity={12} />
      <directionalLight position={[-10, -10, -10]} intensity={12} />
      
      <Suspense fallback={null}>
        <group ref={groupRef}>
          <Center>
            <Model />
          </Center>
        </group>
      </Suspense>
    </>
  )
}