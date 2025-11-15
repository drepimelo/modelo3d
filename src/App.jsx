// src/App.jsx

import React from 'react'
import Cena3d from './Cena3d.jsx' 
import './App.css' 
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'

function App() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh' 
    }}>

      {/* CORREÇÃO AQUI: 
        O <Canvas /> é o container principal para TUDO de 3D.
      */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 25 }}
      >
        {/* E o <ScrollControls /> vive DENTRO do Canvas,
          envolvendo a cena que você quer que responda ao scroll.
        */}
        <ScrollControls pages={3} damping={0.3}>
          <Cena3d /> {/* Nosso componente de cena 3D */}
        </ScrollControls>
        
      </Canvas>
      
      {/* O texto de aviso (isto está correto) */}
      <div style={{
        position: 'absolute', 
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white', 
        fontFamily: 'sans-serif',
        zIndex: 10 
      }}>
        Role a página para baixo
      </div>
      
    </div>
  )
}

export default App